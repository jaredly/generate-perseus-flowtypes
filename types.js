declare type categorizer = {
  items: string[],
  values: (number | null)[],
  randomizeItems: boolean | null,
  categories: string[],
  static: null | boolean,
  highlightLint: null | boolean,
  linterContext: null | {
    paths: empty[],
    highlightLint: boolean,
    contentType: "",
    stack: empty[],
  },
};


declare type simulator = {
  xAxisLabel: "Proportion (%)",
  proportionOrPercentage: "percentage" | "proportion",
  yAxisLabel: string,
  numTrials: number,
  proportionLabel: string,
};


declare type image = {
  box: [number, number],
  title: string,
  labels: empty[] | [{
    content: "",
    coordinates: [number, number],
    alignment: "center",
  }],
  caption: string,
  range: [[number, number], [number, number]],
  backgroundImage: {
    url: string | null,
    width: number,
    height: number,
  },
  static: boolean | null,
  alt: string,
};


declare type orderer = {
  otherOptions: {
    content: string
  }[],
  layout: "vertical" | "horizontal",
  options: {
    content: string
  }[] | null | {
    content: "go" | "I'm" | "outside" | "tired" | "to" | "too"
  }[] | [{
    content: "$n + q$"
  }, {
    content: "$n - q$"
  }, {
    content: "$q-n$"
  }] | {
    content: "man" | "in" | "moon" | "the"
  }[] | {
    content: "French" | "black-and-white" | "a" | "depressing" | "movie"
  }[] | {
    content: "extremely" | "It" | "hot" | "outside" | "was"
  }[] | {
    content: "new" | "car" | "red" | "the"
  }[] | {
    content: "in" | "We" | "it" | "just" | "made" | "time"
  }[] | [{
    content: string
  }],
  correctOptions: {
    content: string
  }[],
  height: "normal" | "auto",
};


declare type radio = {
  displayCount: null,
  choices: {
    content: string,
    isNoneOfTheAbove: boolean | null,
    clue: string | null | "This is the cosine." | "This is the sine.",
    correct: null | boolean,
  }[],
  countChoices: boolean | null,
  hasNoneOfTheAbove: boolean | null,
  multipleSelect: boolean,
  randomize: boolean,
  deselectEnabled: boolean,
  onePerLine: null | boolean,
  noneOfTheAbove: null | boolean,
};


declare type grapher = {
  graph: {
    rulerTicks: number,
    labels: ["x" | "\\text{Boats}" | "", "y" | "\\text{Cars}" | "f(x)" | ""],
    range: [[number, number], [number, number]],
    step: [number, number],
    valid: boolean | null,
    markings: "graph" | "none" | "grid",
    backgroundImage: {
      url: null | string,
      width: null | number,
      height: null | number,
      scale: null | number,
      bottom: null | number,
      left: null | number,
    },
    rulerLabel: "",
    snapStep: null | [number, number],
    editableSettings: null | ["graph", "snap", "image"] | ("snap" | "graph" | "image" | "measure")[],
    gridStep: null | [number, number],
    showRuler: null | boolean,
    showProtractor: null | boolean,
    showTooltips: null | boolean,
    box: null | [number, number],
  },
  correct: {
    asymptote: [[number, number], [number, number]] | null,
    coords: [[number, number], [number, number]] | null,
    type: "logarithm" | "linear" | "exponential" | "quadratic" | "sinusoid" | "absolute_value",
  },
  availableTypes: ("absolute_value" | "linear" | "quadratic" | "exponential" | "logarithm" | "sinusoid")[],
};


declare type graded-group = PerseusContent;


declare type table = {
  headers: ("" | "Compound" | "x" | "y" | "$u$" | "$v$" | "$x$" | "$y$")[],
  rows: number,
  columns: number,
  answers: string[][],
};


declare type label-image = {
  imageAlt: string,
  imageUrl: string,
  markers: {
    y: number,
    x: number,
    answers: string[],
    label: string,
  }[],
  choices: string[],
  hideChoicesFromInstructions: boolean,
  static: boolean,
  imageHeight: number,
  imageWidth: number,
  multipleAnswers: boolean,
};


declare type transformer = {
  graphMode: "dynamic" | "interactive",
  gradeEmpty: boolean,
  graph: {
    rulerTicks: number,
    showProtractor: boolean,
    snapStep: [number, number],
    labels: ["x", "y"],
    range: [[number, number], [number, number]],
    gridStep: [number, number],
    markings: "none" | "graph" | "grid",
    step: [number, number],
    showRuler: boolean,
    backgroundImage: {
      scale: number | null,
      bottom: number | null,
      url: string | null | "",
      height: number | null,
      width: number | null,
      left: number | null,
    },
    rulerLabel: "",
  },
  starting: {
    shape: {
      type: ["polygon-5" | "polygon-3" | "polygon-4"] | "polygon-3" | ["polygon-3"] | ["lineSegment", "lineSegment"] | ["polygon-5"] | ["polygon-4"] | ["polygon-6"],
      coords: [number, number][],
      options: null | [{}] | [{}, {}],
    },
    transformations: empty[],
  },
  listMode: "interactive" | "dynamic",
  version: number,
  tools: {
    translation: {
      enabled: boolean,
      constraints: {},
      required: null | boolean,
    },
    rotation: {
      enabled: boolean,
      coord: [number, number],
      constraints: {
        fixed: boolean
      },
      required: null | boolean,
    },
    dilation: {
      enabled: boolean,
      coord: [number, number],
      constraints: {
        fixed: boolean
      },
      required: null | boolean,
    },
    reflection: {
      enabled: boolean,
      coords: [[number, number], [number, number]],
      constraints: {
        fixed: boolean
      },
      required: null | boolean,
    },
  },
  correct: {
    shape: {
      type: ("polygon-5" | "polygon-3" | "polygon-4" | "lineSegment" | "polygon-6")[],
      coords: [number, number][],
      options: {}[],
    },
    transformations: {
      type: "rotation" | "reflection" | "translation" | "dilation",
      center: [number, number] | null,
      angleDeg: number | null,
      line: null | [[number, number], [number, number]],
      vector: null | [number, number],
      scale: null | number,
    }[],
  },
  drawSolutionShape: boolean,
};


declare type group = PerseusContent;


declare type matrix = {
  cursorPosition: [number, number],
  suffix: "",
  answers: (null | number)[][],
  prefix: string,
  static: boolean | null,
  matrixBoardSize: [number, number],
};


declare type passage-ref = {
  passageNumber: number,
  referenceNumber: number,
  static: null | boolean,
  summaryText: null | "",
};


declare type passage = {
  passageTitle: "" | "Passage A" | "Passage B" | "Dark Snow",
  footnotes: "",
  static: boolean,
  passageText: string,
  showLineNumbers: boolean,
};


declare type input-number = {
  maxError: number | "0.1" | "1" | "0.01" | "0.04",
  inexact: boolean,
  value: "0.5" | "38" | number | "0" | "2" | "1" | "69000" | "5200" | "5027",
  simplify: "required",
  answerType: "number",
  size: "normal" | "small",
  rightAlign: null | boolean,
};


declare type measurer = {
  box: [number, number],
  rulerTicks: number,
  showProtractor: boolean,
  image: {
    url: null | string,
    top: null | number,
    left: null | number,
  },
  rulerPixels: number,
  rulerLength: number,
  showRuler: boolean,
  rulerLabel: "" | "m" | "cm",
  static: null | boolean,
};


declare type dropdown = {
  static: boolean | null,
  placeholder: string,
  choices: {
    content: string,
    correct: boolean,
  }[],
};


declare type matcher = {
  padding: boolean,
  orderMatters: boolean,
  labels: [string, string],
  right: string[],
  left: string[],
};


declare type explanation = {
  hidePrompt: "Hide explanation" | "Hide explanation " | "Got it, thanks!" | "Hide diagram." | "Hide reference" | "Hide footnote",
  widgets: {
    "image 1": null | {
      graded: boolean,
      version: {
        major: number,
        minor: number,
      },
      static: boolean,
      type: "image",
      options: {
        box: [number, number],
        title: "",
        labels: empty[],
        caption: "",
        range: [[number, number], [number, number]],
        backgroundImage: {
          url: string,
          width: number,
          height: number,
        },
        static: boolean,
        alt: string,
      },
      alignment: "block",
    }
  } | null | {},
  explanation: string,
  static: boolean | null,
  showPrompt: string,
};


declare type sequence = {
  json: PerseusContent[]
};


declare type sorter = {
  padding: boolean,
  layout: "horizontal" | "vertical",
  correct: string[],
};


declare type number-line = {
  labelRange: [null | number, null | number],
  tickStep: number | null,
  labelStyle: "decimal" | "improper" | "non-reduced",
  range: [number, number],
  numDivisions: null | number,
  snapDivisions: number,
  labelTicks: boolean,
  initialX: null | number,
  correctRel: "eq" | "gt" | "le" | "lt" | "ge",
  static: boolean | null,
  divisionRange: [number, number],
  correctX: number | null,
  isInequality: null | boolean,
  showTooltips: null | boolean,
  isTickCtrl: null | boolean,
};


declare type graded-group-set = {
  gradedGroups: empty[]
};


declare type cs-program = {
  settings: {
    name: "question" | "" | "probHeads",
    value: string,
  }[],
  height: number,
  width: number,
  programID: "5735507881820160" | "6729568946552832" | "" | "5900231381221376" | "5241695823331328",
  static: boolean | null,
  showButtons: boolean,
  showEditor: boolean,
};


declare type passage-ref-target = {
  content: "",
  static: boolean,
};


declare type numeric-input = {
  coefficient: boolean,
  labelText: "" | "The value equals" | null | "displacement" | "distance traveled" | string | "percentile" | "radius" | "diameter",
  rightAlign: boolean | null,
  answers: {
    status: "correct" | "wrong",
    maxError: null | number,
    strict: boolean,
    value: number,
    simplify: "required" | "optional" | boolean,
    message: string,
    answerForms: null | ["proper", "improper", "mixed"] | ["decimal"] | empty[] | ("decimal" | "integer" | "proper" | "improper")[] | ["proper", "improper"] | ("decimal" | "integer" | "proper" | "improper" | "mixed" | "pi")[],
  }[],
  static: boolean | null,
  multipleNumberInput: boolean | null,
  size: "normal" | "small",
};


declare type definition = {
  definition: string,
  togglePrompt: string,
  static: boolean,
};


declare type interaction = {
  graph: {
    box: [number, number],
    tickStep: [number, number],
    labels: ["x" | "\\text{Re}", "y" | "\\text{Im}"],
    gridStep: [number, number],
    range: [[number, number], [number, number]],
    markings: "graph" | "none" | "grid",
    rulerTicks: null | number,
    snapStep: null | [number, number],
    editableSettings: null | ["canvas", "graph"],
    backgroundImage: null | {
      url: null,
      width: number,
      height: number,
    } | {
      url: null,
      scale: number,
      bottom: number,
      left: number,
    },
    valid: null | boolean,
    showRuler: null | boolean,
    showProtractor: null | boolean,
    showTooltips: null | boolean,
    rulerLabel: null | "",
  },
  elements: {
    type: "label" | "point" | "line" | "movable-point" | "rectangle" | "parametric" | "function",
    options: {
      color: "black" | "#6495ED" | null | "#FF00AF" | "#9AB8ED" | "#9BEDCE" | "#9D38BD" | "#28AE7B" | "#EDD19B",
      coordX: string | null | "0" | "2.25" | "7.75",
      coordY: string | null | "1" | "-.75" | "-0.75",
      label: string | null | "$\\text{Shape A}$" | "$\\text{Shape B}$",
      strokeDasharray: "" | null | ".",
      startX: string | null | "5" | "-6" | "x_0" | "x_1" | "0" | "-2" | "3" | "10" | "2.5" | "1" | "-1" | "-8" | "5.5",
      startY: string | null | "-2" | "4" | "y_0" | "y_1" | "0" | "5" | "0.5" | "15",
      endY: string | null | "y_1" | "10" | "0" | "5" | "0.5" | "12" | "-12",
      endX: string | null | "x_1" | "x_0" | "0" | "10" | "3" | "7" | "2.5" | "8" | "9" | "4.5",
      arrows: "" | null | "->",
      strokeWidth: number | null,
      constraintFn: null | "0" | "-9" | "3" | "-4" | "0.5",
      constraintYMin: null | "-10" | "6" | "3" | "-4" | "0",
      constraintXMax: null | "10" | "4.5" | "3" | "9" | "8" | "6" | "0",
      varSubscript: null | number,
      constraint: null | "snap" | "y" | "none",
      constraintXMin: null | "-10" | "0" | "5.5" | "3" | "5" | "1.5" | "2",
      snap: null | number,
      constraintYMax: null | "10" | "6" | "3" | "-4" | "0",
      width: "1+x_0\\cdot0.15" | null | string | "2.8" | "2" | "2+x_0\\cdot0.6",
      height: "3+x_0\\cdot0.45" | null | string | "5" | "4-x_0\\cdot0.6",
      rangeMin: null | "0" | "6" | "-7",
      y: null | "2+\\sin(t)",
      x: null | "-2+\\cos(t)",
      rangeMax: null | "2\\pi" | "6" | "9" | "10",
      value: string | null,
      funcName: "f" | null | "g",
    },
    key: string,
  }[],
  static: null | boolean,
};


declare type plotter = {
  maxY: number,
  type: "pic" | "bar" | "dotplot" | "line" | "histogram",
  labels: [string, string],
  scaleY: number,
  labelInterval: number | null,
  categories: string[],
  starting: number[],
  correct: number[],
  snapsPerLine: number,
  picUrl: string | null,
  picSize: null | number,
  plotDimensions: null | [number, number],
  picBoxHeight: null | number,
};


declare type interactive-graph = {
  rulerTicks: number | null,
  showProtractor: boolean,
  graph: {
    type: "point" | "linear" | "segment" | "polygon" | "linear-system",
    numPoints: number | "unlimited" | null,
    numSegments: null | number,
    numSides: null | number,
    showSides: null | boolean,
    showAngles: null | boolean,
    snapTo: null | "grid",
  },
  snapStep: [number, number] | null,
  labels: ["x", "y"] | null | ["$\\text{Age}$", "$\\text{Sleep}$"],
  step: [number, number],
  gridStep: [number, number] | null,
  backgroundImage: {
    url: null | string | "",
    scale: number | "1" | null,
    bottom: number | null | "",
    left: number | null | "",
    height: null | number,
    width: null | number,
  },
  range: [[number, number], [number, number]],
  showRuler: boolean | null,
  markings: "graph" | "none",
  showTooltips: boolean | null,
  rulerLabel: "" | null,
  correct: {
    coords: [number | [number, number], number | [number, number]][] | null | [number, number][] | [[number, number]] | [[number, number], [number, number]] | [[[number, number], [number, number]], [[number, number], [number, number]]] | [[number, number], [number, number], [number, number]] | [[[number, number], [number, number]]],
    numPoints: number | "unlimited" | null,
    type: "point" | "linear" | "segment" | "polygon" | "linear-system",
    numSegments: null | number,
    numSides: null | number,
    snapTo: null | "grid",
    showSides: null | boolean,
    showAngles: null | boolean,
    match: null | "congruent",
  },
};


declare type iframe = {
  settings: {
    name: string,
    value: string,
  }[],
  url: string,
  height: "420" | "405" | "410" | "400" | "300" | "200" | "" | "340" | "500" | "440" | number,
  width: "840" | "425" | "440" | "410" | "420" | "400" | "" | "405" | number | "800",
  allowFullScreen: boolean,
  static: boolean | null,
  allowTopNavigation: boolean | null,
};


declare type lights-puzzle = {
  startCells: boolean[][],
  flipPattern: "x" | "plus" | null,
  static: boolean | null,
  gradeIncompleteAsWrong: boolean,
};


declare type video = {
  location: string,
  static: null | boolean,
};


declare type expression = {
  functions: ["f" | "A", "g" | "L", "h" | "W"],
  answerForms: {
    considered: "correct",
    simplify: boolean,
    value: "9e^x" | "(9+2x)(9-2x)" | "-(2x+9)(2x-9)" | "15<23",
    form: boolean,
    key: number | null,
  }[] | null | [{
    considered: "correct",
    simplify: boolean,
    value: string,
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "69",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "b^5+8b^4+11b^3+4b^2",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "7x^4",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "2w+4=35",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "5z",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "c^4+8c^3-3c^2-7c",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "e^2-1",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "2250\\pi",
    form: boolean,
    key: number,
  }, {
    considered: "correct",
    simplify: boolean,
    value: "7065",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "y\\le x-1",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "t=7m",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "-5",
    form: boolean,
    key: number,
  }] | [{
    considered: "wrong",
    simplify: boolean,
    value: string,
    form: boolean,
    key: "1",
  }, {
    considered: "wrong",
    simplify: boolean,
    value: string,
    form: boolean,
    key: "2",
  }, {
    considered: "correct",
    simplify: boolean,
    value: string,
    form: boolean,
    key: "0",
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "\\frac{\\pi}{4}",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "8",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "-4.2c-5.55",
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "\\frac{1}{2}\\pi",
    form: boolean,
    key: number,
  }, {
    considered: "correct",
    simplify: boolean,
    value: "1.57",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "4-40i",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "2.35\\cdot10^{20}",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "9^2",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "-\\frac{1}{2}",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "0.5n^2+2n+2",
    form: boolean,
    key: number,
  }] | [{
    considered: "correct",
    simplify: boolean,
    value: "40",
    form: boolean,
    key: number,
  }],
  buttonSets: ("basic" | "prealgebra" | "basic relations" | "advanced relations" | "logarithms")[] | null | ["basic"] | ["basic", "prealgebra"],
  times: boolean,
  form: null | boolean,
  value: null | "5" | "-2e^2" | string | "(1/27)*3^x",
  simplify: null | boolean,
  buttonsVisible: null | "never",
};
