// Ok

import fs from 'fs';
import bt from '@babel/types';
import generate from '@babel/generator';
const data = JSON.parse(
    fs.readFileSync('../sqlite/widget_options.json', 'utf8'),
);

type Literal = {
    type: 'literal';
    value: string;
};

type MapT = {
    type: 'map';
    value: Type;
};

type Obj = {
    type: 'object';
    attributes: { [key: string]: Type };
};

type Union = {
    type: 'union';
    options: Array<Type>;
};
type ArrayT = { type: 'array'; item: Type };

type Tuple = { type: 'tuple'; items: Array<Type> };

type Type =
    | { type: 'null' }
    | { type: 'string' }
    | { type: 'number' }
    | { type: 'boolean' }
    | { type: 'empty-array' }
    | { type: 'perseus-content' }
    | Tuple
    | ArrayT
    | Literal
    | MapT
    | Obj
    | Union;

const flowTypeFromType = (t: Type): bt.FlowType => {
    switch (t.type) {
        case 'number':
            return bt.numberTypeAnnotation();
        case 'boolean':
            return bt.booleanTypeAnnotation();
        case 'string':
            return bt.stringTypeAnnotation();
        case 'perseus-content':
            return bt.genericTypeAnnotation(bt.identifier('PerseusContent'));
        case 'literal':
            return bt.stringLiteralTypeAnnotation(t.value);
        case 'tuple':
            return bt.tupleTypeAnnotation(t.items.map(flowTypeFromType));
        case 'null':
            return bt.nullLiteralTypeAnnotation();
        case 'union':
            return bt.unionTypeAnnotation(t.options.map(flowTypeFromType));
        case 'empty-array':
            return bt.arrayTypeAnnotation(bt.emptyTypeAnnotation());
        case 'array':
            return bt.arrayTypeAnnotation(flowTypeFromType(t.item));
        case 'map':
            return bt.objectTypeAnnotation(
                [],
                [
                    bt.objectTypeIndexer(
                        null,
                        bt.stringTypeAnnotation(),
                        flowTypeFromType(t.value),
                    ),
                ],
            );
        case 'object':
            return bt.objectTypeAnnotation(
                Object.keys(t.attributes).map((k) =>
                    bt.objectTypeProperty(
                        k.match(/[-+\/\s]/g)
                            ? bt.stringLiteral(k)
                            : bt.identifier(k),
                        flowTypeFromType(t.attributes[k]),
                    ),
                ),
            );
    }
};

const typesEqual = (one: Type, two: Type): boolean => {
    if (one.type !== two.type) {
        return false;
    }
    switch (one.type) {
        case 'null':
        case 'number':
        case 'string':
        case 'boolean':
            return true;
        case 'tuple': {
            const tw = two as Tuple;
            return (
                one.items.length === tw.items.length &&
                one.items.every((item, i) => typesEqual(item, tw.items[i]))
            );
        }
        case 'array':
            return typesEqual(one.item, (two as ArrayT).item);
        case 'literal':
            return one.value === (two as Literal).value;
        case 'map':
            return typesEqual(one.value, (two as MapT).value);
        case 'empty-array':
            return true;
        case 'object': {
            two = two as Obj;
            for (let k of Object.keys(one.attributes)) {
                if (
                    !two.attributes[k] ||
                    !typesEqual(one.attributes[k], two.attributes[k])
                ) {
                    return false;
                }
            }
            for (let k of Object.keys(two.attributes)) {
                if (!one.attributes[k]) {
                    return false;
                }
            }
            return true;
        }
        case 'perseus-content':
            return true;
        case 'union': {
            const tw = two as Union;
            return (
                one.options.every((t) =>
                    tw.options.some((o) => typesEqual(t, o)),
                ) &&
                tw.options.every((t) =>
                    one.options.some((o) => typesEqual(t, o)),
                )
            );
        }
        default:
            const _: never = one;
            return false;
    }
};

const MAX_LITERAL_UNION = 10;

const tupleAndArray = (one: Type, two: Type): Type | null => {
    if (
        two.type === 'tuple' &&
        one.type === 'array'
        // two.items.every((t) => typesEqual(t, (one as ArrayT).item))
    ) {
        // return one;
        let el = one.item;
        two.items.forEach((item) => (el = unify(el, item)));
        return { type: 'array', item: el };
    }
    return null;
};

const unionAndString = (one: Type, two: Type): Type | null => {
    if (
        one.type === 'union' &&
        one.options.every(
            (t) =>
                t.type === 'literal' ||
                t.type === 'string' ||
                t.type === 'null',
        ) &&
        one.options.length > MAX_LITERAL_UNION &&
        (two.type === 'literal' || two.type === 'string' || two.type === 'null')
    ) {
        if (two.type === 'null' && one.options.some((t) => t.type === 'null')) {
            return {
                type: 'union',
                options: [{ type: 'string' }, { type: 'null' }],
            };
        }
        return { type: 'string' };
    }
    return null;
};

const unify = (one: Type, two: Type): Type => {
    if (one.type !== two.type) {
        if (one.type === 'string' && two.type === 'literal') {
            return one;
        }
        if (two.type === 'string' && one.type === 'literal') {
            return two;
        }
        if (one.type === 'empty-array' && two.type === 'array') {
            return two;
        }
        if (two.type === 'empty-array' && one.type === 'array') {
            return one;
        }

        let merged: Type | null;
        merged = tupleAndArray(one, two);
        if (merged != null) {
            return merged;
        }
        merged = tupleAndArray(two, one);
        if (merged != null) {
            return merged;
        }
        merged = unionAndString(one, two);
        if (merged != null) {
            return merged;
        }
        merged = unionAndString(two, one);
        if (merged != null) {
            return merged;
        }

        if (one.type === 'union') {
            if (
                two.type === 'string' &&
                one.options.every(
                    (t) => t.type === 'literal' || t.type === 'string',
                )
            ) {
                return two;
            }
            if (one.options.some((t) => typesEqual(t, two))) {
                return one;
            }
            // TODO: I might want to go through the union to find the type that is "most similar"
            // to the new type.
            return { ...one, options: one.options.concat(two) };
        } else if (two.type === 'union') {
            if (
                one.type === 'string' &&
                two.options.every(
                    (t) => t.type === 'literal' || t.type === 'string',
                )
            ) {
                return one;
            }
            if (two.options.some((t) => typesEqual(t, one))) {
                return two;
            }
            return { ...two, options: two.options.concat(one) };
        }
        return { type: 'union', options: [one, two] };
    }
    switch (one.type) {
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
        case 'empty-array':
        case 'perseus-content':
            return one;
        case 'tuple':
            if (one.items.length !== (two as Tuple).items.length) {
                let elType: null | Type = null;
                one.items.forEach((item) => {
                    if (elType == null) {
                        elType = item;
                    }
                    elType = unify(elType, item);
                });
                (two as Tuple).items.forEach(
                    (item) => (elType = unify(elType!, item)),
                );
                return { type: 'array', item: elType! };
            }
            return {
                type: 'tuple',
                items: one.items.map((item, i) =>
                    unify(item, (two as Tuple).items[i]),
                ),
            };
        case 'array':
            if (typesEqual(one.item, (two as ArrayT).item)) {
                return one;
            }
            return {
                type: 'array',
                item: unify(one.item, (two as ArrayT).item),
            };
        case 'literal':
            if (one.value === (two as Literal).value) {
                return one;
            }
            return { type: 'union', options: [one, two] };
        case 'map': {
            two = two as MapT;
            if (typesEqual(one.value, two.value)) {
                return one;
            } else {
                return { type: 'union', options: [one, two] };
            }
        }
        case 'object': {
            const result: { [key: string]: Type } = {};
            const tw = two as Obj;
            Object.keys(one.attributes).forEach((k) => {
                result[k] = unify(
                    one.attributes[k],
                    tw.attributes[k] || { type: 'null' },
                );
            });
            Object.keys(tw.attributes).forEach((k) => {
                if (result[k] == null) {
                    result[k] = unify(
                        one.attributes[k] || { type: 'null' },
                        tw.attributes[k],
                    );
                }
            });
            return { type: 'object', attributes: result };
        }
        case 'union': {
            const result = one.options.slice();
            const tw = two as Union;
            tw.options.forEach((option) => {
                if (result.some((v) => typesEqual(v, option))) {
                    return;
                }
                result.push(option);
            });
            return { type: 'union', options: result };
        }
    }
    // return { type: 'union', options: [one, two] };
};

const MAX_LITERAL_STRING = 20;

const MAX_TUPLE = 4;

const typeFromValue = (value: unknown): Type => {
    if (value == null) {
        return { type: 'null' };
    }
    if (typeof value === 'string') {
        if (value.length < MAX_LITERAL_STRING) {
            return { type: 'literal', value: value };
        } else {
            return { type: 'string' };
        }
    }
    if (typeof value === 'number') {
        return { type: 'number' };
    }
    if (typeof value === 'boolean') {
        return { type: 'boolean' };
    }
    if (Array.isArray(value)) {
        if (!value.length) {
            return { type: 'empty-array' };
        }
        if (value.length < MAX_TUPLE) {
            return { type: 'tuple', items: value.map(typeFromValue) };
        }
        let elType: Type | null = null;
        value.forEach((item) => {
            const t = typeFromValue(item);
            if (elType === null) {
                elType = t;
            } else {
                elType = unify(t, elType);
            }
        });
        return {
            type: 'array',
            item: elType!,
        };
    }
    if (typeof value === 'object' && value) {
        if (
            typeof value.content === 'string' &&
            typeof value.widgets === 'object'
        ) {
            return { type: 'perseus-content' };
        }
        let elType: Type | null | false = null;
        const attributes: { [key: string]: Type } = {};
        const v = value as { [key: string]: unknown };
        Object.keys(value).forEach((k) => {
            const t = typeFromValue(v[k]);
            attributes[k] = t;
            if (elType === null) {
                elType = t;
            } else if (elType !== false) {
                if (!typesEqual(elType, t)) {
                    elType = false;
                }
            }
        });
        if (
            elType !== false &&
            elType !== null &&
            Object.keys(attributes).length > 5
        ) {
            return { type: 'map', value: elType };
        }

        return { type: 'object', attributes };
    }
    console.log(value);
    throw new Error(`not handled`);
};

// const typesByWidget =

const output: Array<bt.DeclareTypeAlias> = [];

Object.keys(data).some((type) => {
    let t: Type | null = null;
    data[type].slice(0, 40).forEach((item: unknown) => {
        const tt = typeFromValue(item);
        if (t == null) {
            t = tt;
        } else {
            t = unify(t, tt);
        }
    });
    output.push(
        bt.declareTypeAlias(bt.identifier(type), null, flowTypeFromType(t!)),
    );
    return false;
});

// console.log(generate);
console.log(output.map((t) => generate.default(t).code).join('\n\n\n'));

// TODO: start at: need to better merge unions of objects that have string literal values that differ, and should be unified as 'string'
