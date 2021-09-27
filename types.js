// @flow

type categorizer = {
  categories: $ReadOnlyArray<string>,
  highlightLint?: boolean,
  items: $ReadOnlyArray<string>,
  linterContext?: {
    contentType: "",
    highlightLint: boolean,
    paths: $ReadOnlyArray<empty>,
    stack: $ReadOnlyArray<empty>,
  },
  randomizeItems?: boolean,
  static?: boolean,
  values: $ReadOnlyArray<?number>,
};

type simulator = {
  numTrials: number,
  proportionLabel: string,
  proportionOrPercentage: "percentage" | "proportion",
  xAxisLabel: "Proportion (%)",
  yAxisLabel: string,
};

type image = {
  alt?: string,
  backgroundImage: {
    height?: number,
    url?: string,
    width?: number,
  },
  box: [number, number],
  caption?: string,
  labels: $ReadOnlyArray<{
    alignment: "center" | "right",
    content: string,
    coordinates: [number, number],
  }> | $ReadOnlyArray<{
    alignment: "center",
    content: string,
    coordinates: [number, number],
  }> | $ReadOnlyArray<{
    alignment: "center",
    content: string,
    coordinates: [number, number],
  }> | $ReadOnlyArray<{
    alignment: "center",
    content: string,
    coordinates: [number, number],
  }>,
  range: [[number, number], [number, number]],
  static?: boolean,
  title?: string,
};

type orderer = {
  correctOptions: $ReadOnlyArray<{
    content: string
  }>,
  height: "normal" | "auto" | "large",
  layout: "vertical" | "horizontal",
  options?: $ReadOnlyArray<{
    content: string
  }>,
  otherOptions: $ReadOnlyArray<{
    content: string
  }>,
};

type radio = {
  choices: $ReadOnlyArray<{
    clue?: string,
    content?: string,
    correct?: boolean,
    isNoneOfTheAbove?: boolean,
    widgets?: PerseusWidgets,
  }>,
  countChoices?: boolean,
  deselectEnabled?: boolean,
  displayCount?: number,
  hasNoneOfTheAbove?: boolean,
  multipleSelect?: boolean,
  noneOfTheAbove?: boolean,
  onePerLine?: boolean,
  randomize?: boolean,
};

type grapher = {
  availableTypes: $ReadOnlyArray<"linear" | "absolute_value" | "quadratic" | "exponential" | "logarithm" | "sinusoid" | "tangent">,
  correct: {
    type: "logarithm",
    asymptote: [[number, number], [number, number]],
    coords: [[number, number], [number, number]],
  } | {
    type: "linear",
    asymptote: null,
    coords?: [[number, number], [number, number]],
  } | {
    type: "exponential",
    asymptote: [[number, number], [number, number]],
    coords: [[number, number], [number, number]],
  } | {
    type: "quadratic",
    asymptote: null,
    coords: [[number, number], [number, number]],
  } | {
    type: "sinusoid",
    asymptote: null,
    coords: [[number, number], [number, number]],
  } | {
    type: "absolute_value",
    asymptote: null,
    coords: [[number, number], [number, number]],
  },
  graph: {
    backgroundImage: {
      bottom?: number,
      height?: number,
      left?: number,
      scale?: number,
      url?: string,
      width?: number,
    },
    box?: [number, number],
    editableSettings?: $ReadOnlyArray<"graph" | "snap" | "image" | "measure">,
    gridStep?: [number, number],
    labels: ["x" | "\\text{Boats}" | "" | "\\text{Time}" | "Time (seconds)", "y" | "\\text{Cars}" | "f(x)" | "" | "\\text{Water}" | "Files (megabytes)"],
    markings: "graph" | "none" | "grid",
    range: [[number, number], [number, number]],
    rulerLabel: "",
    rulerTicks: number,
    showProtractor?: boolean,
    showRuler?: boolean,
    showTooltips?: boolean,
    snapStep?: [number, number],
    step: [number, number],
    valid?: boolean | string,
  },
};

type graded_group = {
  content: string,
  hint?: {
    content: string,
    images: PerseusImages,
    widgets: PerseusWidgets,
  },
  images: PerseusImages,
  title?: "QUESTION 1" | "" | "Problem 4" | "Problem 3",
  widgets: PerseusWidgets,
};

type table = {
  answers: $ReadOnlyArray<$ReadOnlyArray<string>>,
  columns: number,
  headers: $ReadOnlyArray<"" | "Compound" | "x" | "y" | "$u$" | "$v$" | "$x$" | "$y$">,
  rows: number,
};

type label_image = {
  choices: $ReadOnlyArray<string>,
  hideChoicesFromInstructions: boolean,
  imageAlt: string,
  imageHeight: number,
  imageUrl: string,
  imageWidth: number,
  markers: $ReadOnlyArray<{
    answers: $ReadOnlyArray<string>,
    label: string,
    x: number,
    y: number,
  }>,
  multipleAnswers: boolean,
  static: boolean,
};

type transformer = {
  correct: {
    shape: {
      type: $ReadOnlyArray<"polygon-5" | "polygon-3" | "polygon-4" | "lineSegment" | "polygon-6" | "angle" | "line" | "circle">,
      coords: $ReadOnlyArray<[number, number]>,
      options?: $ReadOnlyArray<{
        reflex?: boolean
      }>,
    },
    transformations: $ReadOnlyArray<{
      type: "rotation",
      angleDeg: number,
      center: [number, number],
    } | {
      type: "reflection",
      line: [[number, number], [number, number]],
    } | {
      type: "translation",
      vector: [number, number],
    } | {
      type: "dilation",
      center: [number, number],
      scale: number,
    }>,
  },
  drawSolutionShape: boolean,
  gradeEmpty: boolean,
  graph: {
    backgroundImage: {
      bottom?: number,
      height?: number,
      left?: number,
      scale?: number,
      url?: string,
      width?: number,
    },
    gridStep?: [number, number],
    labels?: ["x", "y"],
    markings: "none" | "graph" | "grid",
    range: [[number, number], [number, number]],
    rulerLabel?: "",
    rulerTicks?: number,
    showProtractor: boolean,
    showRuler?: boolean,
    snapStep?: [number, number],
    step: [number, number],
  },
  graphMode: "dynamic" | "interactive" | "static",
  listMode: "interactive" | "dynamic" | "static",
  starting: {
    shape: {
      type: $ReadOnlyArray<"polygon-5" | "polygon-3" | "polygon-4" | "lineSegment" | "polygon-6">,
      coords: $ReadOnlyArray<[number, number]>,
      options?: $ReadOnlyArray<{}>,
    } | {
      type: "polygon-3",
      coords: [[number, number], [number, number], [number, number]],
    } | {
      type: ["polygon-3" | "lineSegment" | "polygon-4" | "polygon-5" | "polygon-6" | "line" | "circle"],
      coords: $ReadOnlyArray<[number, number]>,
      options: [{}],
    } | {
      type: ["polygon-3"],
      coords: [[number, number], [number, number], [number, number]],
      options?: [{}],
    } | {
      type: ["angle"],
      coords: [[number, number], [number, number], [number, number]],
      options: [{
        reflex: boolean
      }],
    } | {
      type: ["line" | "lineSegment"],
      coords: [[number, number], [number, number]],
      options?: [{}],
    } | {
      type: "polygon",
      coords: [[number, number], [number, number], [number, number]],
    },
    transformations: $ReadOnlyArray<empty>,
  },
  tools: {
    dilation: {
      constraints: {
        fixed: boolean
      },
      coord: [number, number],
      enabled: boolean,
      required?: boolean,
    },
    reflection: {
      constraints: {
        fixed: boolean
      },
      coords: [[number, number], [number, number]],
      enabled: boolean,
      required?: boolean,
    },
    rotation: {
      constraints: {
        fixed: boolean
      },
      coord: [number, number],
      enabled: boolean,
      required?: boolean,
    },
    translation: {
      constraints: {},
      enabled: boolean,
      required?: boolean,
    },
  },
  version: number,
};

type group = {
  content: string,
  images: PerseusImages,
  metadata?: $ReadOnlyArray<string>,
  widgets: PerseusWidgets,
};

type matrix = {
  answers: $ReadOnlyArray<$ReadOnlyArray<?("11" | number)>>,
  cursorPosition: [number, number],
  matrixBoardSize: [number, number],
  prefix: string,
  static?: boolean,
  suffix: "",
};

type passage_ref = {
  passageNumber: number,
  referenceNumber: number,
  static?: boolean,
  summaryText?: "" | "It was . . . water" | "city...lanes" | "I . . . dance" | "Well . . . yawn" | "What . . . uglier" | "Ah . . . wife" | "At . . .enters",
};

type passage = {
  footnotes?: string,
  passageText: string,
  passageTitle?: string,
  showLineNumbers: boolean,
  static?: boolean,
};

type input_number = {
  answerType?: "number" | "percent" | "integer" | "improper" | "rational" | "pi" | "decimal",
  inexact?: boolean,
  maxError?: number | "0.1" | "1" | "0.01" | "0.04" | "0.001" | "0.03" | "0.0001" | "0.101" | "0.0834" | "0" | "6" | "0.005" | "6e-7" | "0.0005" | "500000" | "0.5" | "0.3" | "0.0017" | "0.0231" | "0.004" | "0.000001" | "0.00001" | "0.00005" | "0.02" | "2" | "0.05" | "21" | "0.019" | "0.047" | "0.38" | "0.0091" | "0.2" | "0.15" | "0.034" | "0.0006" | "0.002" | "0.031" | "0.0077" | "5" | "0.029" | "0.015" | "0.000005" | "4e-7" | "0.025" | "0.0143" | "3" | "0.0056" | "0.9" | "0.0019" | "0.007" | "0.003" | "0.34" | "7e-7" | "30",
  rightAlign?: boolean,
  simplify: "required" | "optional" | "enforced",
  size: "normal" | "small",
  value: string | "38" | number | "0" | "2" | "1" | "69000" | "5200" | "5027" | "4" | "9" | "6" | "5.7" | "0.73" | "16.54" | "0.086" | "3" | "0.42" | "23.45" | "-0.75" | "38.18" | "40" | boolean,
};

type measurer = {
  box: [number, number],
  image?: {
    left?: number,
    top?: number,
    url?: string,
  },
  imageLeft?: number,
  imageTop?: number,
  imageUrl?: string,
  rulerLabel: "" | "m" | "cm",
  rulerLength: number,
  rulerPixels: number,
  rulerTicks: number,
  showProtractor: boolean,
  showRuler: boolean,
  static?: boolean,
};

type dropdown = {
  choices: $ReadOnlyArray<{
    content: string,
    correct: boolean,
  }>,
  placeholder?: string,
  static?: boolean,
};

type matcher = {
  labels: [string, string],
  left: $ReadOnlyArray<string>,
  orderMatters: boolean,
  padding: boolean,
  right: $ReadOnlyArray<string>,
};

type explanation = {
  explanation: string,
  hidePrompt: string,
  showPrompt: string,
  static?: boolean,
  widgets?: PerseusWidgets,
};

type sequence = {
  json: $ReadOnlyArray<{
    content: string,
    images: PerseusImages,
    widgets: PerseusWidgets,
  }>
};

type sorter = {
  correct: $ReadOnlyArray<string>,
  layout: "horizontal" | "vertical",
  padding: boolean,
};

type number_line = {
  correctRel: "eq" | "gt" | "le" | "lt" | "ge",
  correctX?: number,
  divisionRange: [number, number],
  initialX?: number,
  isInequality?: boolean,
  isTickCtrl?: boolean,
  labelRange: [?(number | ""), ?(number | "")],
  labelStyle: "decimal" | "improper" | "non-reduced" | "mixed",
  labelTicks: boolean,
  numDivisions?: number,
  range: [number, number],
  showTooltips?: boolean,
  snapDivisions?: number,
  static?: boolean,
  tickStep?: number,
};

type graded_group_set = {
  gradedGroups: $ReadOnlyArray<empty>
};

type cs_program = {
  height: number,
  programID: "5735507881820160" | "6729568946552832" | "" | "5900231381221376" | "5241695823331328",
  settings: $ReadOnlyArray<{
    name: "question" | "" | "probHeads",
    value: string,
  }>,
  showButtons: boolean,
  showEditor: boolean,
  static?: boolean,
  width: number,
};

type passage_ref_target = {
  content: "",
  static: boolean,
};

type numeric_input = {
  answers: $ReadOnlyArray<{
    answerForms?: $ReadOnlyArray<"decimal" | "proper" | "improper" | "mixed" | "integer" | "pi"> | $ReadOnlyArray<"proper" | "improper" | "mixed" | "decimal" | "integer" | "pi">,
    maxError?: number,
    message: string,
    simplify: "required" | "optional" | boolean | "accepted" | "enforced",
    status: "correct" | "wrong" | "ungraded",
    strict: boolean,
    value?: number,
  }>,
  backgroundImage?: {
    height: number,
    url: string,
    width: number,
  },
  box?: [number, number],
  coefficient?: boolean,
  editableSettings?: $ReadOnlyArray<"graph" | "snap" | "image" | "measure">,
  gridStep?: [number, number],
  labelText?: string,
  labels?: ["x", "y"],
  markings?: "none",
  multipleNumberInput?: boolean,
  range?: [[number, number], [number, number]],
  rightAlign?: boolean,
  rulerLabel?: "",
  rulerTicks?: number,
  showProtractor?: boolean,
  showRuler?: boolean,
  showTooltips?: boolean,
  size: "normal" | "small",
  snapStep?: [number, number],
  static?: boolean,
  step?: [number, number],
  valid?: boolean,
};

type definition = {
  definition: string,
  static: boolean,
  togglePrompt: string,
};

type interaction = {
  elements: $ReadOnlyArray<{
    type: "point",
    key: string,
    options: {
      color: "#28AE7B" | "#9D38BD" | "#6495ED" | "black" | "#FF00AF" | "#DF0030" | "gray",
      coordX: string,
      coordY: string,
    },
  } | {
    type: "label",
    key: string,
    options: {
      color: "#28AE7B" | "#9D38BD" | "#6495ED" | "black" | "#FF00AF" | "#DF0030" | "gray",
      coordX: string,
      coordY: string,
      label: string,
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "snap" | "y" | "none" | "x",
      constraintFn: string,
      constraintXMax?: string,
      constraintXMin?: string,
      constraintYMax?: string,
      constraintYMin?: string,
      snap: number,
      startX: string,
      startY: string,
      varSubscript: number,
    },
  } | {
    type: "line",
    key: string,
    options: {
      arrows: "->" | "",
      color: "#6495ED" | "#FF00AF" | "black" | "#28AE7B" | "#9D38BD" | "#DF0030" | "gray",
      endX: string,
      endY: string,
      startX: string,
      startY: string,
      strokeDasharray: "" | "." | "- " | "-",
      strokeWidth: number,
    },
  } | {
    type: "rectangle",
    key: "rectangle-4c4637" | "rectangle-c97d9b" | "rectangle-e95641" | "rectangle-1031fe" | "rectangle-3f11c2" | "rectangle-8a957a" | "rectangle-ac3d9f" | "rectangle-95804b" | "rectangle-e84c60" | "rectangle-9a0bd2" | "rectangle-ff42bd" | "rectangle-78e17d" | "rectangle-75eaf1" | "rectangle-a23dc7" | "rectangle-a2a674" | "rectangle-1761e8" | "rectangle-a79d5e",
    options: {
      color: "#9AB8ED" | "#9BEDCE" | "#EDD19B" | "#DA9BED" | "#ED9BD3",
      coordX: string,
      coordY: string,
      height: string,
      width: string,
    },
  } | {
    type: "parametric",
    key: string,
    options: {
      color: "black" | "#6495ED" | "#DF0030" | "#9D38BD" | "#FF00AF",
      rangeMax: string,
      rangeMin: string,
      strokeDasharray: "",
      strokeWidth: number,
      x: string,
      y: string,
    },
  } | {
    type: "function",
    key: string,
    options: {
      color: "#6495ED" | "#9D38BD" | "#DF0030" | "#FF00AF",
      funcName: "f" | "g" | "h" | "i",
      rangeMax: "6" | "9" | "10" | "25" | "50" | "x_0-1" | "16",
      rangeMin: "0" | "6" | "-7" | "-5" | "-10",
      strokeDasharray: "" | "- ",
      strokeWidth: number,
      value: string,
    },
  } | {
    type: "movable-line",
    key: "movable-line-86f67f" | "movable-line-3c7511" | "movable-line-cd1ad1" | "movable-line-9ac951" | "movable-line-6b3bd7" | "movable-line-3f2662" | "movable-line-bc5d43" | "movable-line-fcc99d" | "movable-line-d530d3" | "movable-line-447a5e" | "movable-line-51cfbc",
    options: {
      constraint: "x" | "snap" | "y" | "none",
      constraintFn: "0" | "1",
      constraintXMax: "6" | "10" | "7" | "11" | "0",
      constraintXMin: "0" | "2",
      constraintYMax: "6" | "10" | "1" | "3" | "100",
      constraintYMin: "0" | "3" | "1" | "-1" | "-10" | "y_1+1" | "y_3+1",
      endSubscript: number,
      endX: "0" | "6" | "10" | "0.5" | "1" | "1.5" | "2" | "3",
      endY: "4" | "3" | "1" | "0" | "5" | "10" | "15",
      snap: number,
      startSubscript: number,
      startX: "0" | "8" | "7" | "0.5" | "1" | "1.5" | "2",
      startY: "0" | "6" | "1" | "-1" | "5" | "10" | "15",
    },
  }>,
  graph: {
    backgroundImage?: {
      bottom?: number,
      height?: number,
      left?: number,
      scale?: number,
      url: null,
      width?: number,
    },
    box: [number, number],
    editableSettings?: ["canvas", "graph"],
    gridStep: [number, number],
    labels: ["x" | "\\text{Re}" | "t" | "Q" | "n", "y" | "\\text{Im}" | "P" | "a_n"],
    markings: "graph" | "none" | "grid",
    range: [[number, number], [number, number]],
    rulerLabel?: "",
    rulerTicks?: number,
    showProtractor?: boolean,
    showRuler?: boolean,
    showTooltips?: boolean,
    snapStep?: [number, number],
    tickStep: [number, number],
    valid?: boolean | string,
  },
  static?: boolean,
};

type plotter = {
  type: "pic",
  categories: $ReadOnlyArray<string>,
  correct: $ReadOnlyArray<number>,
  labelInterval: number,
  labels: [string, string],
  maxY: number,
  picUrl: string,
  scaleY: number,
  snapsPerLine: number,
  starting: $ReadOnlyArray<number>,
} | {
  type: "bar",
  categories: $ReadOnlyArray<string>,
  correct: $ReadOnlyArray<number>,
  labelInterval: number,
  labels: [string, string],
  maxY: number,
  picBoxHeight?: number,
  picSize?: number,
  picUrl?: string,
  plotDimensions?: [number, number],
  scaleY: number,
  snapsPerLine: number,
  starting: $ReadOnlyArray<number>,
} | {
  type: "dotplot",
  categories: $ReadOnlyArray<string>,
  correct: $ReadOnlyArray<number>,
  labelInterval: number,
  labels: [string, ""],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: $ReadOnlyArray<number>,
} | {
  type: "line",
  categories: $ReadOnlyArray<string>,
  correct: $ReadOnlyArray<number>,
  labelInterval: number,
  labels: [string, string],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: $ReadOnlyArray<number>,
} | {
  type: "histogram",
  categories: $ReadOnlyArray<"$0$" | "$100$" | "$200$" | "$300$" | "$25$" | "$50$" | "$75$" | "$5$" | "$10$" | "$15$" | "$20$" | "$3$" | "$6$" | "$9$" | "$12$" | "$40$" | "$60$" | "$80$" | "$4$" | "$8$" | "$30$" | "$90$" | "$120$" | "$45$" | "$150$" | "$250$" | "$450$" | "$600$" | "$16$">,
  correct: $ReadOnlyArray<number>,
  labelInterval: null,
  labels: [string, string],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: $ReadOnlyArray<number>,
};

type interactive_graph = {
  backgroundImage: {
    bottom?: number | "" | "0" | "37" | "4" | "1",
    height?: number,
    left?: number | "" | "0" | "32",
    scale?: number | "1" | ".16",
    url?: string,
    width?: number,
  },
  box?: [number, number],
  correct: {
    type: "point",
    coords?: $ReadOnlyArray<[number, number]>,
    numPoints?: number | "unlimited",
  } | {
    type: "linear",
    coords?: [[number, number], [number, number]],
  } | {
    type: "segment",
    coords: $ReadOnlyArray<[[number, number], [number, number]]>,
    numSegments?: number,
  } | {
    type: "polygon",
    coords: $ReadOnlyArray<[number, number]>,
    match?: "congruent" | "similar" | "exact",
    numSides?: number | "unlimited",
    showAngles?: boolean,
    showSides?: boolean,
    snapTo?: "grid" | "angles" | "sides",
  } | {
    type: "linear-system",
    coords: [[[number, number], [number, number]], [[number, number], [number, number]]],
  } | {
    type: "circle",
    center: [number, number],
    radius: number,
  } | {
    type: "angle",
    allowReflexAngles?: boolean,
    angleOffsetDeg?: number,
    coords: [[number, number], [number, number], [number, number]],
    match?: "congruent",
    showAngles?: boolean,
    snapDegrees: number,
  } | {
    type: "ray",
    coords: [[number, number], [number, number]],
  } | {
    type: "sinusoid",
    coords: [[number, number], [number, number]],
  },
  editableSettings?: $ReadOnlyArray<"graph" | "snap" | "image" | "measure">,
  graph?: {
    type: "point",
    numPoints?: number | "unlimited",
  } | {
    type: "linear"
  } | {
    type: "segment",
    numSegments?: number,
  } | {
    type: "polygon",
    numSides?: number | "unlimited",
    showAngles?: boolean,
    showSides?: boolean,
    snapTo?: "grid" | "angles" | "sides",
  } | {
    type: "linear-system"
  } | {
    type: "circle"
  } | {
    type: "angle",
    allowReflexAngles?: boolean,
    angleOffsetDeg?: number,
    showAngles?: boolean,
    snapDegrees: number,
  } | {
    type: "ray"
  } | {
    type: "sinusoid"
  },
  gridStep?: [number, number],
  labels?: [string, string],
  markings: "graph" | "none" | "grid",
  range: [[number, number], [number, number]],
  rulerLabel?: "",
  rulerTicks?: number,
  showProtractor: boolean,
  showRuler?: boolean,
  showTooltips?: boolean,
  snapStep?: [number, number],
  step: [number, number],
  valid?: boolean,
};

type iframe = {
  allowFullScreen: boolean,
  allowTopNavigation?: boolean,
  height: "420" | "405" | "410" | "400" | "300" | "200" | "" | "340" | "500" | "440" | number | "350" | "130" | "140",
  settings: $ReadOnlyArray<{
    name: string,
    value: string,
  }>,
  static?: boolean,
  url: string,
  width: "840" | "425" | "440" | "410" | "420" | "400" | "" | "405" | number | "800" | "380" | "480" | "415",
};

type lights_puzzle = {
  flipPattern?: "x" | "plus",
  gradeIncompleteAsWrong: boolean,
  startCells: $ReadOnlyArray<$ReadOnlyArray<boolean>>,
  static?: boolean,
};

type video = {
  location: string,
  static?: boolean,
};

type expression = {
  answerForms?: $ReadOnlyArray<{
    buttonSets?: $ReadOnlyArray<"basic" | "trig" | "prealgebra" | "logarithms" | "basic+div" | "advanced relations">,
    buttonsVisible?: "focused",
    considered: "correct" | "wrong" | "ungraded",
    draggable?: boolean,
    expressionProps?: {
      buttonSets: ["advanced relations", "basic+div"],
      buttonsVisible: "focused",
      form: boolean,
      functions: ["f", "g", "h"],
      simplify: boolean,
      times: boolean,
      value: "",
      widgetId: "undefined-0",
    },
    form?: boolean,
    functions?: ["f", "g", "h"] | $ReadOnlyArray<empty>,
    highlightLint?: boolean,
    key?: number | "1" | "2" | "0" | "null" | "3" | "4",
    linterContext?: {
      contentType: "",
      highlightLint: boolean,
      paths: $ReadOnlyArray<empty>,
      stack: $ReadOnlyArray<empty>,
    },
    simplify?: boolean,
    times?: boolean,
    value?: string,
  }>,
  buttonSets?: $ReadOnlyArray<"basic" | "prealgebra" | "basic relations" | "advanced relations" | "logarithms" | "trig" | "basic+div">,
  buttonsVisible?: "never",
  form?: boolean,
  functions: $ReadOnlyArray<string> | $ReadOnlyArray<empty>,
  placeholder?: string,
  simplify?: boolean,
  static?: boolean,
  times: boolean,
  value?: string,
};