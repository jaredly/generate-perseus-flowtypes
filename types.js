declare type categorizer = {
  items: string[],
  values: (?number)[],
  randomizeItems: ?boolean,
  categories: string[],
  static: ?boolean,
  highlightLint: ?boolean,
  linterContext: ?{
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
    url: ?string,
    width: number,
    height: number,
  },
  static: ?boolean,
  alt: string,
};


declare type orderer = {
  otherOptions: {
    content: string
  }[],
  layout: "vertical" | "horizontal",
  options: ?{
    content: string
  }[],
  correctOptions: {
    content: string
  }[],
  height: "normal" | "auto",
};


declare type radio = {
  displayCount: null,
  choices: {
    content: string,
    isNoneOfTheAbove: ?boolean,
    clue: ?string,
    correct: ?boolean,
  }[],
  countChoices: ?boolean,
  hasNoneOfTheAbove: ?boolean,
  multipleSelect: boolean,
  randomize: boolean,
  deselectEnabled: boolean,
  onePerLine: ?boolean,
  noneOfTheAbove: ?boolean,
};


declare type grapher = {
  graph: {
    rulerTicks: number,
    labels: ["x" | "\\text{Boats}" | "", "y" | "\\text{Cars}" | "f(x)" | ""],
    range: [[number, number], [number, number]],
    step: [number, number],
    valid: ?boolean,
    markings: "graph" | "none" | "grid",
    backgroundImage: {
      url: ?string,
      width: ?number,
      height: ?number,
      scale: ?number,
      bottom: ?number,
      left: ?number,
    },
    rulerLabel: "",
    snapStep: ?[number, number],
    editableSettings: ?("snap" | "graph" | "image" | "measure")[],
    gridStep: ?[number, number],
    showRuler: ?boolean,
    showProtractor: ?boolean,
    showTooltips: ?boolean,
    box: ?[number, number],
  },
  correct: {
    asymptote: ?[[number, number], [number, number]],
    coords: ?[[number, number], [number, number]],
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
      scale: ?number,
      bottom: ?number,
      url: ?string,
      height: ?number,
      width: ?number,
      left: ?number,
    },
    rulerLabel: "",
  },
  starting: {
    shape: {
      type: ["polygon-5" | "polygon-3" | "polygon-4"] | "polygon-3" | ["polygon-3"] | ["lineSegment", "lineSegment"] | ["polygon-5"] | ["polygon-4"] | ["polygon-6"],
      coords: [number, number][],
      options: ?{}[],
    },
    transformations: empty[],
  },
  listMode: "interactive" | "dynamic",
  version: number,
  tools: {
    translation: {
      enabled: boolean,
      constraints: {},
      required: ?boolean,
    },
    rotation: {
      enabled: boolean,
      coord: [number, number],
      constraints: {
        fixed: boolean
      },
      required: ?boolean,
    },
    dilation: {
      enabled: boolean,
      coord: [number, number],
      constraints: {
        fixed: boolean
      },
      required: ?boolean,
    },
    reflection: {
      enabled: boolean,
      coords: [[number, number], [number, number]],
      constraints: {
        fixed: boolean
      },
      required: ?boolean,
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
      center: ?[number, number],
      angleDeg: ?number,
      line: ?[[number, number], [number, number]],
      vector: ?[number, number],
      scale: ?number,
    }[],
  },
  drawSolutionShape: boolean,
};


declare type group = PerseusContent;


declare type matrix = {
  cursorPosition: [number, number],
  suffix: "",
  answers: (?number)[][],
  prefix: string,
  static: ?boolean,
  matrixBoardSize: [number, number],
};


declare type passage-ref = {
  passageNumber: number,
  referenceNumber: number,
  static: ?boolean,
  summaryText: ?"",
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
  rightAlign: ?boolean,
};


declare type measurer = {
  box: [number, number],
  rulerTicks: number,
  showProtractor: boolean,
  image: {
    url: ?string,
    top: ?number,
    left: ?number,
  },
  rulerPixels: number,
  rulerLength: number,
  showRuler: boolean,
  rulerLabel: "" | "m" | "cm",
  static: ?boolean,
};


declare type dropdown = {
  static: ?boolean,
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
  widgets: ?{
    "image 1": ?{
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
  },
  explanation: string,
  static: ?boolean,
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
  labelRange: [?number, ?number],
  tickStep: ?number,
  labelStyle: "decimal" | "improper" | "non-reduced",
  range: [number, number],
  numDivisions: ?number,
  snapDivisions: number,
  labelTicks: boolean,
  initialX: ?number,
  correctRel: "eq" | "gt" | "le" | "lt" | "ge",
  static: ?boolean,
  divisionRange: [number, number],
  correctX: ?number,
  isInequality: ?boolean,
  showTooltips: ?boolean,
  isTickCtrl: ?boolean,
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
  static: ?boolean,
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
  rightAlign: ?boolean,
  answers: {
    status: "correct" | "wrong",
    maxError: ?number,
    strict: boolean,
    value: number,
    simplify: "required" | "optional" | boolean,
    message: string,
    answerForms: ?("proper" | "improper" | "mixed" | "decimal" | "integer" | "pi")[],
  }[],
  static: ?boolean,
  multipleNumberInput: ?boolean,
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
    rulerTicks: ?number,
    snapStep: ?[number, number],
    editableSettings: ?["canvas", "graph"],
    backgroundImage: ?{
      url: null,
      width: ?number,
      height: ?number,
      scale: ?number,
      bottom: ?number,
      left: ?number,
    },
    valid: ?boolean,
    showRuler: ?boolean,
    showProtractor: ?boolean,
    showTooltips: ?boolean,
    rulerLabel: ?"",
  },
  elements: {
    type: "label" | "point" | "line" | "movable-point" | "rectangle" | "parametric" | "function",
    options: {
      color: ?("#6495ED" | "#FF00AF" | "black" | "#9AB8ED" | "#9BEDCE" | "#9D38BD" | "#28AE7B" | null | "#EDD19B"),
      coordX: ?string,
      coordY: ?string,
      label: ?string,
      strokeDasharray: ?("." | "" | null),
      startX: ?string,
      startY: ?string,
      endY: ?string,
      endX: ?string,
      arrows: ?("->" | ""),
      strokeWidth: ?number,
      constraintFn: ?("0" | "-9" | "3" | "-4" | "0.5"),
      constraintYMin: ?("6" | "-10" | "3" | "-4" | "0"),
      constraintXMax: ?("4.5" | "10" | "3" | "9" | "8" | "6" | "0"),
      varSubscript: ?number,
      constraint: ?("snap" | "y" | "none"),
      constraintXMin: ?("0" | "5.5" | "-10" | "3" | "5" | "1.5" | "2"),
      snap: ?number,
      constraintYMax: ?("6" | "10" | "3" | "-4" | "0"),
      width: ?string,
      height: ?string,
      rangeMin: ?("0" | "6" | "-7"),
      y: ?"2+\\sin(t)",
      x: ?"-2+\\cos(t)",
      rangeMax: ?("6" | "9" | "2\\pi" | "10"),
      value: ?string,
      funcName: ?("f" | "g"),
    },
    key: string,
  }[],
  static: ?boolean,
};


declare type plotter = {
  maxY: number,
  type: "pic" | "bar" | "dotplot" | "line" | "histogram",
  labels: [string, string],
  scaleY: number,
  labelInterval: ?number,
  categories: string[],
  starting: number[],
  correct: number[],
  snapsPerLine: number,
  picUrl: ?string,
  picSize: ?number,
  plotDimensions: ?[number, number],
  picBoxHeight: ?number,
};


declare type interactive-graph = {
  rulerTicks: ?number,
  showProtractor: boolean,
  graph: {
    type: "point" | "linear" | "segment" | "polygon" | "linear-system",
    numPoints: number | "unlimited" | null,
    numSegments: ?number,
    numSides: ?number,
    showSides: ?boolean,
    showAngles: ?boolean,
    snapTo: ?"grid",
  },
  snapStep: ?[number, number],
  labels: ?["x" | "$\\text{Age}$", "y" | "$\\text{Sleep}$"],
  step: [number, number],
  gridStep: ?[number, number],
  backgroundImage: {
    url: ?string,
    scale: number | "1" | null,
    bottom: ?(number | ""),
    left: ?(number | ""),
    height: ?number,
    width: ?number,
  },
  range: [[number, number], [number, number]],
  showRuler: ?boolean,
  markings: "graph" | "none",
  showTooltips: ?boolean,
  rulerLabel: ?"",
  correct: {
    coords: ?[number | [number, number], number | [number, number]][],
    numPoints: number | "unlimited" | null,
    type: "point" | "linear" | "segment" | "polygon" | "linear-system",
    numSegments: ?number,
    numSides: ?number,
    snapTo: ?"grid",
    showSides: ?boolean,
    showAngles: ?boolean,
    match: ?"congruent",
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
  static: ?boolean,
  allowTopNavigation: ?boolean,
};


declare type lights-puzzle = {
  startCells: boolean[][],
  flipPattern: "x" | "plus" | null,
  static: ?boolean,
  gradeIncompleteAsWrong: boolean,
};


declare type video = {
  location: string,
  static: ?boolean,
};


declare type expression = {
  functions: ["f" | "A", "g" | "L", "h" | "W"],
  answerForms: ?{
    considered: "correct" | "wrong",
    simplify: boolean,
    value: string,
    form: ?boolean,
    key: ?(number | "1" | "2" | "0"),
  }[],
  buttonSets: ?("basic" | "prealgebra" | "basic relations" | "advanced relations" | "logarithms")[],
  times: boolean,
  form: ?boolean,
  value: ?string,
  simplify: ?boolean,
  buttonsVisible: ?"never",
};
