// Ok

import fs from 'fs';
import bt from '@babel/types';
import generate from '@babel/generator';
const data = JSON.parse(
    fs.readFileSync('../sqlite/widget_options.json', 'utf8'),
);
const outFile = process.argv[2];
console.log(`Writing to ${outFile}`);

type Literal = {
    type: 'literal';
    value: string;
};

type MapT = {
    type: 'map';
    value: Type;
};

type Nullable = { type: 'nullable'; inner: Type };

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
    | Nullable
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
        case 'nullable':
            return bt.nullableTypeAnnotation(flowTypeFromType(t.inner));
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
                Object.keys(t.attributes)
                    .sort((a, b) => {
                        if (a === 'type') {
                            return -1;
                        }
                        if (b === 'type') {
                            return 1;
                        }

                        return a > b ? 1 : -1;
                    })
                    .map((k) => {
                        const id = k.match(/[-+\/\s]/g)
                            ? bt.stringLiteral(k)
                            : bt.identifier(k);
                        const value = t.attributes[k];
                        if (value.type === 'nullable') {
                            return {
                                ...bt.objectTypeProperty(
                                    id,
                                    flowTypeFromType(value.inner),
                                ),
                                optional: true,
                            };
                        }

                        return bt.objectTypeProperty(
                            id,
                            flowTypeFromType(value),
                        );
                    }),
            );
    }
};

const typesEqual = (one: Type, two: Type): boolean => {
    return typeDistance(one, two) === 0;
};

const typeDistance = (one: Type, two: Type): number => {
    if (one.type !== two.type) {
        if (one.type === 'string' && two.type === 'literal') {
            return 100;
        }
        if (one.type === 'literal' && two.type === 'string') {
            return 100;
        }
        if (one.type === 'nullable') {
            return 100 + typeDistance(one.inner, two);
        }
        if (two.type === 'nullable') {
            return 100 + typeDistance(two.inner, one);
        }
        // TODO: array and tuple?
        return 10000;
    }
    switch (one.type) {
        case 'null':
        case 'number':
        case 'string':
        case 'boolean':
        case 'empty-array':
        case 'perseus-content':
            return 0;
        case 'tuple': {
            const tw = two as Tuple;

            if (one.items.length !== tw.items.length) {
                return Math.abs(one.items.length - tw.items.length) * 100;
            }
            return one.items.reduce(
                (total, item, i) =>
                    total + (typesEqual(item, tw.items[i]) ? 0 : 1),
                0,
            );
        }
        case 'array':
            return typeDistance(one.item, (two as ArrayT).item) / 2;
        case 'literal':
            return one.value === (two as Literal).value ? 0 : 100;
        case 'map':
            return typeDistance(one.value, (two as MapT).value) / 2;
        case 'object': {
            two = two as Obj;
            let dist = 0;
            if (
                one.attributes.type != null &&
                one.attributes.type.type === 'literal' &&
                two.attributes.type != null &&
                two.attributes.type.type === 'literal'
            ) {
                if (!typesEqual(one.attributes.type, two.attributes.type)) {
                    dist += 1000;
                }
            }
            for (let k of Object.keys(one.attributes)) {
                if (!two.attributes[k]) {
                    dist += 10;
                } else if (!typesEqual(one.attributes[k], two.attributes[k])) {
                    dist += 100;
                }
            }
            for (let k of Object.keys(two.attributes)) {
                if (!one.attributes[k]) {
                    dist += 10;
                }
            }
            return dist;
        }
        case 'nullable':
            return typeDistance(one.inner, (two as Nullable).inner) / 2;
        case 'union': {
            const tw = two as Union;
            return one.options.every((t) =>
                tw.options.some((o) => typesEqual(t, o)),
            ) &&
                tw.options.every((t) =>
                    one.options.some((o) => typesEqual(t, o)),
                )
                ? 0
                : 1000;
        }
        default:
            const _: never = one;
            return Infinity;
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
        (one.options.length > MAX_LITERAL_UNION || two.type === 'string') &&
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

const mergers: Array<(one: Type, two: Type) => Type | null> = [
    tupleAndArray,
    unionAndString,
    (one: Type, two: Type) =>
        one.type === 'string' && two.type === 'literal' ? one : null,
    (one: Type, two: Type) =>
        one.type === 'empty-array' && two.type === 'array' ? two : null,
    (one: Type, two: Type) =>
        one.type === 'nullable'
            ? two.type === 'null'
                ? one
                : { type: 'nullable', inner: unify(one.inner, two) }
            : null,
    (one: Type, two: Type) =>
        one.type === 'null' ? { type: 'nullable', inner: two } : null,
    (one: Type, two: Type) => {
        if (one.type !== 'union') {
            return null;
        }
        if (one.options.some((t) => typesEqual(t, two))) {
            return one;
        }
        let best: [number, Type] | null = null;
        if (
            two.type === 'object' &&
            two.attributes.type != null &&
            two.attributes.type.type === 'literal'
        ) {
            const tname = two.attributes.type.value;
            one.options.some((type) => {
                if (
                    type.type === 'object' &&
                    type.attributes.type != null &&
                    type.attributes.type.type === 'literal' &&
                    type.attributes.type.value === tname
                ) {
                    best = [0, type];
                }
            });
        } else {
            one.options.forEach((type) => {
                const dist = typeDistance(type, two);
                if (best == null || best[0] > dist) {
                    best = [dist, type];
                }
            });
        }
        if (true) {
            // TODO: null shouldn't be counted, it should just make things nullable
            // TODO: how to know if different types should be distinct? Maybe if
            // ALL attributes are shared, we say type can be a union. Otherwise assume
            // it's a tagged union.
            if (best != null) {
                const unified = unify(best[1], two);
                if (unified.type !== 'union') {
                    return {
                        ...one,
                        options: one.options.map((type) =>
                            type === best![1] ? unified : type,
                        ),
                    };
                }
            }
        }
        // TODO: I might want to go through the union to find the type that is "most similar"
        // to the new type.
        // START HERE: with type distance.
        return { ...one, options: one.options.concat([two]) };
    },
];

// NEXT UP: Got to infer tagged unions folks.
// IF the only consistent attribute between two objects is `type`, then just treat them as distinct.

// NOTE: this in partice is called by an accumulator, so the first argument will be more complex.
const unify = (one: Type, two: Type): Type => {
    if (one.type !== two.type) {
        for (let merger of mergers) {
            let merged: Type | null;
            merged = merger(one, two);
            if (merged != null) {
                return merged;
            }
            merged = merger(two, one);
            if (merged != null) {
                return merged;
            }
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
        case 'nullable':
            return {
                type: 'nullable',
                inner: unify(one.inner, (two as Nullable).inner),
            };
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
            const tw = two as Obj;
            const commonAttrs = Object.keys(tw.attributes).filter(
                (name) => one.attributes[name] != null,
            );
            // Treat this as a tagged union
            if (
                // (commonAttrs.length !== Object.keys(one.attributes).length ||
                //     commonAttrs.length !== Object.keys(tw.attributes).length) &&
                commonAttrs.includes('type') &&
                (one.attributes.type as Literal).value !==
                    (tw.attributes.type as Literal).value
            ) {
                return { type: 'union', options: [one, two] };
            }
            const result: { [key: string]: Type } = {};
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
            console.log('union to union', one.options, tw.options);
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
                elType = unify(elType, t);
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

const output: Array<bt.TypeAlias> = [];

Object.keys(data).some((type) => {
    let toplevelType: Type | null = null;
    data[type].slice(0, 40).forEach((item: unknown) => {
        const instanceType = typeFromValue(item);
        if (toplevelType == null) {
            toplevelType = instanceType;
        } else {
            toplevelType = unify(toplevelType, instanceType);
        }
    });
    output.push(
        bt.typeAlias(
            bt.identifier(type.replace(/-/g, '_')),
            null,
            flowTypeFromType(toplevelType!),
        ),
    );
    return false;
});

// console.log(generate);

fs.writeFileSync(
    outFile,
    output.map((t) => generate.default(t).code).join('\n\n\n'),
    'utf8',
);

// TODO: start at: need to better merge unions of objects that have string literal values that differ, and should be unified as 'string'
// Ohhh ok so just make a `Nullable` type, that will make a bunch of things simpler.
