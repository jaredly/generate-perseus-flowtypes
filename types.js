type categorizer = {
  categories: string[],
  highlightLint?: boolean,
  items: string[],
  linterContext?: {
    contentType: "",
    highlightLint: boolean,
    paths: empty[],
    stack: empty[],
  },
  randomizeItems?: boolean,
  static?: boolean,
  values: (?number)[],
};


type simulator = {
  numTrials: number,
  proportionLabel: string,
  proportionOrPercentage: "percentage" | "proportion",
  xAxisLabel: "Proportion (%)",
  yAxisLabel: string,
};


type image = {
  alt: string,
  backgroundImage: {
    height: number,
    url?: string,
    width: number,
  },
  box: [number, number],
  caption: string,
  labels: empty[] | [{
    alignment: "center",
    content: "",
    coordinates: [number, number],
  }],
  range: [[number, number], [number, number]],
  static?: boolean,
  title: string,
};


type orderer = {
  correctOptions: {
    content: string
  }[],
  height: "normal" | "auto",
  layout: "vertical" | "horizontal",
  options?: {
    content: string
  }[],
  otherOptions: {
    content: string
  }[],
};


type radio = {
  choices: {
    clue?: string,
    content: string,
    correct?: boolean,
    isNoneOfTheAbove?: boolean,
  }[],
  countChoices?: boolean,
  deselectEnabled: boolean,
  displayCount: null,
  hasNoneOfTheAbove?: boolean,
  multipleSelect: boolean,
  noneOfTheAbove?: boolean,
  onePerLine?: boolean,
  randomize: boolean,
};


type grapher = {
  availableTypes: ("absolute_value" | "linear" | "quadratic" | "exponential" | "logarithm" | "sinusoid")[],
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
    editableSettings?: ("snap" | "graph" | "image" | "measure")[],
    gridStep?: [number, number],
    labels: ["x" | "\\text{Boats}" | "", "y" | "\\text{Cars}" | "f(x)" | ""],
    markings: "graph" | "none" | "grid",
    range: [[number, number], [number, number]],
    rulerLabel: "",
    rulerTicks: number,
    showProtractor?: boolean,
    showRuler?: boolean,
    showTooltips?: boolean,
    snapStep?: [number, number],
    step: [number, number],
    valid?: boolean,
  },
};


type graded_group = PerseusContent;


type table = {
  answers: string[][],
  columns: number,
  headers: ("" | "Compound" | "x" | "y" | "$u$" | "$v$" | "$x$" | "$y$")[],
  rows: number,
};


type label_image = {
  choices: string[],
  hideChoicesFromInstructions: boolean,
  imageAlt: string,
  imageHeight: number,
  imageUrl: string,
  imageWidth: number,
  markers: {
    answers: string[],
    label: string,
    x: number,
    y: number,
  }[],
  multipleAnswers: boolean,
  static: boolean,
};


type transformer = {
  correct: {
    shape: {
      type: ("polygon-5" | "polygon-3" | "polygon-4" | "lineSegment" | "polygon-6")[],
      coords: [number, number][],
      options: {}[],
    },
    transformations: ({
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
    })[],
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
    gridStep: [number, number],
    labels: ["x", "y"],
    markings: "none" | "graph" | "grid",
    range: [[number, number], [number, number]],
    rulerLabel: "",
    rulerTicks: number,
    showProtractor: boolean,
    showRuler: boolean,
    snapStep: [number, number],
    step: [number, number],
  },
  graphMode: "dynamic" | "interactive",
  listMode: "interactive" | "dynamic",
  starting: {
    shape: {
      type: ("polygon-5" | "polygon-3" | "polygon-4" | "lineSegment" | "polygon-6")[],
      coords: [number, number][],
      options?: {}[],
    } | {
      type: "polygon-3",
      coords: [[number, number], [number, number], [number, number]],
    } | {
      type: ["polygon-3"],
      coords: [[number, number], [number, number], [number, number]],
      options: [{}],
    },
    transformations: empty[],
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


type group = PerseusContent;


type matrix = {
  answers: (?number)[][],
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
  summaryText?: "",
};


type passage = {
  footnotes: "",
  passageText: string,
  passageTitle: "" | "Passage A" | "Passage B" | "Dark Snow",
  showLineNumbers: boolean,
  static: boolean,
};


type input_number = {
  answerType: "number",
  inexact: boolean,
  maxError: number | "0.1" | "1" | "0.01" | "0.04",
  rightAlign?: boolean,
  simplify: "required",
  size: "normal" | "small",
  value: "0.5" | "38" | number | "0" | "2" | "1" | "69000" | "5200" | "5027",
};


type measurer = {
  box: [number, number],
  image: {
    left?: number,
    top?: number,
    url?: string,
  },
  rulerLabel: "" | "m" | "cm",
  rulerLength: number,
  rulerPixels: number,
  rulerTicks: number,
  showProtractor: boolean,
  showRuler: boolean,
  static?: boolean,
};


type dropdown = {
  choices: {
    content: string,
    correct: boolean,
  }[],
  placeholder: string,
  static?: boolean,
};


type matcher = {
  labels: [string, string],
  left: string[],
  orderMatters: boolean,
  padding: boolean,
  right: string[],
};


type explanation = {
  explanation: string,
  hidePrompt: "Hide explanation" | "Hide explanation " | "Got it, thanks!" | "Hide diagram." | "Hide reference" | "Hide footnote",
  showPrompt: string,
  static?: boolean,
  widgets?: {
    "image 1"?: {
      type: "image",
      alignment: "block",
      graded: boolean,
      options: {
        alt: string,
        backgroundImage: {
          height: number,
          url: string,
          width: number,
        },
        box: [number, number],
        caption: "",
        labels: empty[],
        range: [[number, number], [number, number]],
        static: boolean,
        title: "",
      },
      static: boolean,
      version: {
        major: number,
        minor: number,
      },
    }
  },
};


type sequence = {
  json: PerseusContent[]
};


type sorter = {
  correct: string[],
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
  labelRange: [?number, ?number],
  labelStyle: "decimal" | "improper" | "non-reduced",
  labelTicks: boolean,
  numDivisions?: number,
  range: [number, number],
  showTooltips?: boolean,
  snapDivisions: number,
  static?: boolean,
  tickStep?: number,
};


type graded_group_set = {
  gradedGroups: empty[]
};


type cs_program = {
  height: number,
  programID: "5735507881820160" | "6729568946552832" | "" | "5900231381221376" | "5241695823331328",
  settings: {
    name: "question" | "" | "probHeads",
    value: string,
  }[],
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
  answers: {
    answerForms?: ("proper" | "improper" | "mixed" | "decimal" | "integer" | "pi")[],
    maxError?: number,
    message: string,
    simplify: "required" | "optional" | boolean,
    status: "correct" | "wrong",
    strict: boolean,
    value: number,
  }[],
  coefficient: boolean,
  labelText?: string,
  multipleNumberInput?: boolean,
  rightAlign?: boolean,
  size: "normal" | "small",
  static?: boolean,
};


type definition = {
  definition: string,
  static: boolean,
  togglePrompt: string,
};


type interaction = {
  elements: {
    type: "label" | "point" | "line" | "movable-point" | "rectangle" | "parametric" | "function",
    key: string,
    options: {
      arrows?: "->" | "",
      color?: "#6495ED" | "#FF00AF" | "black" | "#9AB8ED" | "#9BEDCE" | "#9D38BD" | "#28AE7B" | "#EDD19B",
      constraint?: "snap" | "y" | "none",
      constraintFn?: "0" | "-9" | "3" | "-4" | "0.5",
      constraintXMax?: "4.5" | "10" | "3" | "9" | "8" | "6" | "0",
      constraintXMin?: "0" | "5.5" | "-10" | "3" | "5" | "1.5" | "2",
      constraintYMax?: "6" | "10" | "3" | "-4" | "0",
      constraintYMin?: "6" | "-10" | "3" | "-4" | "0",
      coordX?: string,
      coordY?: string,
      endX?: string,
      endY?: string,
      funcName?: "f" | "g",
      height?: string,
      label?: string,
      rangeMax?: "6" | "9" | "2\\pi" | "10",
      rangeMin?: "0" | "6" | "-7",
      snap?: number,
      startX?: string,
      startY?: string,
      strokeDasharray?: "." | "",
      strokeWidth?: number,
      value?: string,
      varSubscript?: number,
      width?: string,
      x?: "-2+\\cos(t)",
      y?: "2+\\sin(t)",
    },
  }[],
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
    labels: ["x" | "\\text{Re}", "y" | "\\text{Im}"],
    markings: "graph" | "none" | "grid",
    range: [[number, number], [number, number]],
    rulerLabel?: "",
    rulerTicks?: number,
    showProtractor?: boolean,
    showRuler?: boolean,
    showTooltips?: boolean,
    snapStep?: [number, number],
    tickStep: [number, number],
    valid?: boolean,
  },
  static?: boolean,
};


type plotter = {
  type: "pic",
  categories: ("Rolly" | "Tumbler" | "Topple" | "Twisty" | "Gymbo" | "Rose" | "Daffodil" | "Tulip")[],
  correct: number[],
  labelInterval: number,
  labels: ["Type of flower" | "Monkey", "Number of flowers" | "Number of flips"],
  maxY: number,
  picUrl: string,
  scaleY: number,
  snapsPerLine: number,
  starting: number[],
} | {
  type: "bar",
  categories: string[],
  correct: number[],
  labelInterval: number,
  labels: [string, string],
  maxY: number,
  picBoxHeight?: number,
  picSize?: number,
  picUrl?: string,
  plotDimensions?: [number, number],
  scaleY: number,
  snapsPerLine: number,
  starting: number[],
} | {
  type: "dotplot",
  categories: string[],
  correct: number[],
  labelInterval: number,
  labels: [string, ""],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: number[],
} | {
  type: "line",
  categories: ("$2$" | "$1$" | "$3$" | "$4$" | "$5$" | "$>5$" | "$>0$" | "$>10$" | "$>15$" | "$<4$" | "$<2$" | "$<6$" | "$<8$" | "$>30$" | "$>45$")[],
  correct: number[],
  labelInterval: number,
  labels: ["Number of pictures" | "number of books" | "family size" | "Time (in seconds)", string],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: number[],
} | {
  type: "histogram",
  categories: ("$100$" | "$0$" | "$200$" | "$300$" | "$25$" | "$50$" | "$75$" | "$5$" | "$10$" | "$15$" | "$20$" | "$3$" | "$6$" | "$9$" | "$12$")[],
  correct: number[],
  labelInterval: null,
  labels: [string, string],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: number[],
};


type interactive_graph = {
  backgroundImage: {
    bottom?: number | "",
    height?: number,
    left?: number | "",
    scale?: number | "1",
    url?: string,
    width?: number,
  },
  correct: {
    type: "point",
    coords?: [number, number][],
    numPoints?: number | "unlimited",
  } | {
    type: "linear",
    coords: [[number, number], [number, number]],
  } | {
    type: "segment",
    coords: [[number, number], [number, number]][],
    numSegments?: number,
  } | {
    type: "polygon",
    coords: [number, number][],
    match?: "congruent",
    numSides?: number,
    showAngles?: boolean,
    showSides?: boolean,
    snapTo?: "grid",
  } | {
    type: "linear-system",
    coords: [[[number, number], [number, number]], [[number, number], [number, number]]],
  },
  graph: {
    type: "point",
    numPoints?: number | "unlimited",
  } | {
    type: "linear"
  } | {
    type: "segment",
    numSegments?: number,
  } | {
    type: "polygon",
    numSides?: number,
    showAngles?: boolean,
    showSides?: boolean,
    snapTo?: "grid",
  } | {
    type: "linear-system"
  },
  gridStep?: [number, number],
  labels?: ["x" | "$\\text{Age}$", "y" | "$\\text{Sleep}$"],
  markings: "graph" | "none",
  range: [[number, number], [number, number]],
  rulerLabel?: "",
  rulerTicks?: number,
  showProtractor: boolean,
  showRuler?: boolean,
  showTooltips?: boolean,
  snapStep?: [number, number],
  step: [number, number],
};


type iframe = {
  allowFullScreen: boolean,
  allowTopNavigation?: boolean,
  height: "420" | "405" | "410" | "400" | "300" | "200" | "" | "340" | "500" | "440" | number,
  settings: {
    name: string,
    value: string,
  }[],
  static?: boolean,
  url: string,
  width: "840" | "425" | "440" | "410" | "420" | "400" | "" | "405" | number | "800",
};


type lights_puzzle = {
  flipPattern?: "x" | "plus",
  gradeIncompleteAsWrong: boolean,
  startCells: boolean[][],
  static?: boolean,
};


type video = {
  location: string,
  static?: boolean,
};


type expression = {
  answerForms?: {
    considered: "correct" | "wrong",
    form?: boolean,
    key?: number | "1" | "2" | "0",
    simplify: boolean,
    value: string,
  }[],
  buttonSets?: ("basic" | "prealgebra" | "basic relations" | "advanced relations" | "logarithms")[],
  buttonsVisible?: "never",
  form?: boolean,
  functions: ["f" | "A", "g" | "L", "h" | "W"],
  simplify?: boolean,
  times: boolean,
  value?: string,
};
