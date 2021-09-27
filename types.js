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
  availableTypes: ("linear" | "absolute_value" | "quadratic" | "exponential" | "logarithm" | "sinusoid")[],
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
    editableSettings?: ("graph" | "snap" | "image" | "measure")[],
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
  elements: ({
    type: "point",
    key: "point-58be31" | "point-76fcfd" | "point-123abf",
    options: {
      color: "#6495ED",
      coordX: "-3" | "8" | "9",
      coordY: "2" | "-8" | "8",
    },
  } | {
    type: "label",
    key: "label-1f27d2" | "label-a3dc10" | "label-230bbe",
    options: {
      color: "black",
      coordX: "-3.5" | "2.5" | "8.5",
      coordY: "2.5" | "7.5" | "-5.5",
      label: "A" | "B" | "C",
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "snap",
      constraintFn: "0",
      constraintXMax: "10",
      constraintXMin: "-10",
      constraintYMax: "10",
      constraintYMin: "-10",
      snap: number,
      startX: "-1" | "1",
      startY: "4" | "-4",
      varSubscript: number,
    },
  } | {
    type: "line",
    key: "line-c115d6" | "line-1b605a",
    options: {
      arrows: "",
      color: "#6495ED" | "#FF00AF",
      endX: "8",
      endY: string,
      startX: "-8",
      startY: string,
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "line",
    key: "line-b94ab7" | "line-2659bd",
    options: {
      arrows: "",
      color: "black",
      endX: "4.5" | "10",
      endY: "0",
      startX: "0" | "5.5",
      startY: "0",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "y",
      constraintFn: "0",
      constraintXMax: "4.5" | "10",
      constraintXMin: "0" | "5.5",
      constraintYMax: "10",
      constraintYMin: "-10",
      snap: number,
      startX: "0" | "5.5",
      startY: "0",
      varSubscript: number,
    },
  } | {
    type: "rectangle",
    key: "rectangle-4c4637" | "rectangle-c97d9b",
    options: {
      color: "#9AB8ED" | "#9BEDCE",
      coordX: string,
      coordY: string,
      height: string,
      width: string,
    },
  } | {
    type: "label",
    key: "label-8cbad0" | "label-edb6fb",
    options: {
      color: "black",
      coordX: "2.25" | "7.75",
      coordY: "-.75" | "-0.75",
      label: "$\\text{Shape A}$" | "$\\text{Shape B}$",
    },
  } | {
    type: "point",
    key: "point-596e66" | "point-69f344" | "point-a302db" | "point-12e77f",
    options: {
      color: "#28AE7B" | "#9D38BD" | "#6495ED" | "black",
      coordX: "-4.5" | "0" | "6",
      coordY: "-9" | "5" | "7" | "0",
    },
  } | {
    type: "label",
    key: "label-6f4c90" | "label-6d3fda" | "label-fce786",
    options: {
      color: "#28AE7B" | "#9D38BD" | "#6495ED",
      coordX: "-4" | "0.55" | "6.55",
      coordY: "-8.6" | "5.4" | "7.4",
      label: "A" | "B" | "C",
    },
  } | {
    type: "line",
    key: "line-c738c5" | "line-586923" | "line-1c2a1c" | "line-940918" | "line-a65028",
    options: {
      arrows: "",
      color: "black",
      endX: "3" | "0" | "0.5",
      endY: "0" | "4" | "0.5",
      startX: "0" | "3" | "0.5",
      startY: "0" | "4" | "0.5",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-174443" | "label-adea41" | "label-bf5d01",
    options: {
      color: "black",
      coordX: "1.5" | "-.5" | "2",
      coordY: "-0.5" | "1.9" | "2.1",
      label: "12" | "16" | "20",
    },
  } | {
    type: "line",
    key: "line-18a153" | "line-c738c5" | "line-586923" | "line-1c2a1c" | "line-940918" | "line-a65028" | "line-1371ef" | "line-73e633" | "line-aa4023",
    options: {
      arrows: "",
      color: "black",
      endX: "0" | "4" | "3.5" | "4.8" | "5",
      endY: "4" | "14" | "4.5" | "0",
      startX: "4" | "0" | "3.5" | "4.8" | "4.6",
      startY: "0" | "14" | "4" | "4.5",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-174443" | "label-adea41" | "label-bf5d01",
    options: {
      color: "black",
      coordX: "6" | "2.1" | "7.1",
      coordY: "7" | "3.2" | "2.1",
      label: "21" | "6" | "",
    },
  } | {
    type: "line",
    key: "line-4aa0bd",
    options: {
      arrows: "",
      color: "#6495ED",
      endX: "-13",
      endY: "-6",
      startX: "7",
      startY: "6",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-921e7c" | "point-e27bd7",
    options: {
      color: "#6495ED" | "#28AE7B",
      coordX: "7" | "2",
      coordY: "6" | "3",
    },
  } | {
    type: "label",
    key: "label-ceb874" | "label-568fab",
    options: {
      color: "black",
      coordX: "7" | "2",
      coordY: "7" | "4",
      label: "C" | "P",
    },
  } | {
    type: "line",
    key: "line-a36a5d" | "line-1a1fe5" | "line-7258ab" | "line-eba19f" | "line-945e4" | "line-6a6faf" | "line-dd3c4d",
    options: {
      arrows: "",
      color: "black",
      endX: "7" | "10" | "3" | "3.5",
      endY: "0" | "3" | ".5",
      startX: "0" | "7" | "3" | "3.5",
      startY: "0" | "3" | ".5",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-3f50ab" | "label-93f368" | "label-3b278d",
    options: {
      color: "black",
      coordX: "6.5" | "3.3" | "9",
      coordY: "3.4" | "1.9" | "1.5",
      label: "7" | "h" | "5",
    },
  } | {
    type: "point",
    key: "point-6ae405" | "point-1f33bf" | "point-9982b8",
    options: {
      color: "#9D38BD" | "#28AE7B" | "#FF00AF",
      coordX: "5" | "-2" | "0",
      coordY: "2" | "4" | "0",
    },
  } | {
    type: "line",
    key: "line-e5115a" | "line-878019" | "line-e3743d" | "line-fe2af",
    options: {
      arrows: "->" | "",
      color: "black",
      endX: string,
      endY: "2" | "4" | "-9" | "0.5x_0+1.5",
      startX: string,
      startY: "0" | "-9" | "0.5x_0-2.5",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-77c649" | "label-6a668a" | "label-7f9e61",
    options: {
      color: "black",
      coordX: "5" | "-2" | "3",
      coordY: "3" | "5" | "7",
      label: "z_1" | "z_2" | "z_1+z_2",
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "none" | "y",
      constraintFn: "0" | "-9",
      constraintXMax: "3" | "9",
      constraintXMin: "3" | "5",
      constraintYMax: "6" | "10",
      constraintYMin: "6" | "-10",
      snap: number,
      startX: "3" | "5",
      startY: "6" | "-9",
      varSubscript: number,
    },
  } | {
    type: "parametric",
    key: "parametric-2100fa",
    options: {
      color: "black",
      rangeMax: "2\\pi",
      rangeMin: "0",
      strokeDasharray: "",
      strokeWidth: number,
      x: "-2+\\cos(t)",
      y: "2+\\sin(t)",
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "none",
      constraintFn: "0",
      constraintXMax: "10",
      constraintXMin: "-10",
      constraintYMax: "10",
      constraintYMin: "-10",
      snap: number,
      startX: "3",
      startY: "4",
      varSubscript: number,
    },
  } | {
    type: "line",
    key: "line-a46a38" | "line-2d0421",
    options: {
      arrows: "->",
      color: "#6495ED" | "#28AE7B",
      endX: string,
      endY: string,
      startX: "0" | "-2",
      startY: "0" | "2",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "line",
    key: "line-f4728a" | "line-323466" | "line-e9db0" | "line-7a82b5" | "line-5c556b" | "line-dbaf34" | "line-3136a8" | "line-dae6c1" | "line-268ef3" | "line-ee8caa",
    options: {
      arrows: "",
      color: "black",
      endX: "0" | "6" | ".5",
      endY: "5" | "5.5" | "0",
      startX: "0" | "6" | ".5",
      startY: "6" | "0" | "5.5" | "5" | "1",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-456d78" | "label-dd5687" | "label-daa81f",
    options: {
      color: "black",
      coordX: "6.5" | "3",
      coordY: "2.5" | "4.5" | "0",
      label: "10" | "12" | "11",
    },
  } | {
    type: "line",
    key: "line-18a153" | "line-c738c5" | "line-586923" | "line-1c2a1c" | "line-940918" | "line-a65028" | "line-1371ef" | "line-73e633" | "line-aa4023",
    options: {
      arrows: "",
      color: "black",
      endX: "2" | "6" | "2.5" | "0",
      endY: "5" | "0" | "0.5" | "-0.5" | "-0.7",
      startX: "0" | "6" | "2" | "2.5",
      startY: "0" | "5" | "0.5" | "-0.5" | "-0.3",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-174443" | "label-adea41",
    options: {
      color: "black",
      coordX: "3" | "2.8",
      coordY: "-1" | "2.2",
      label: "$600 \\,\\text{m}$" | "$500\\,\\text{m}$",
    },
  } | {
    type: "line",
    key: "line-18a153" | "line-c738c5" | "line-586923" | "line-1c2a1c" | "line-940918" | "line-a65028" | "line-1371ef" | "line-73e633" | "line-aa4023",
    options: {
      arrows: "",
      color: "#28AE7B" | "#6495ED" | "#FF00AF" | "#9D38BD" | "black",
      endX: "8" | "12" | "8.5" | "0",
      endY: "4" | "0" | "0.5" | "-0.5" | "-0.7",
      startX: "0" | "12" | "8" | "8.5",
      startY: "0" | "4" | "0.5" | "-0.5" | "-0.3",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-174443" | "label-adea41" | "label-bf5d01" | "label-2dd60c" | "label-7c584b",
    options: {
      color: "#6495ED" | "#9D38BD" | "black" | "#28AE7B" | "#FF00AF",
      coordX: "6" | "7.4" | "7.1" | "3.5" | "10.5",
      coordY: "-1" | "1.9" | "2.1" | "2.5",
      label: "$\\text{base}$" | "A" | "" | "B" | "C",
    },
  } | {
    type: "line",
    key: "line-f4728a" | "line-323466" | "line-f34755" | "line-e9db0" | "line-7a82b5" | "line-5c556b" | "line-dbaf34" | "line-3136a8" | "line-dae6c1",
    options: {
      arrows: "",
      color: "black",
      endX: "0" | "7" | ".5",
      endY: "2" | "5" | "1.5" | "3",
      startX: "0" | "7" | ".5",
      startY: "0" | "2" | "3" | "1.5",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-456d78" | "label-dd5687",
    options: {
      color: "black",
      coordX: "7.5" | "3.5",
      coordY: "3.5" | "2.5",
      label: "6" | "14",
    },
  } | {
    type: "line",
    key: "line-426b09" | "line-9d536a",
    options: {
      arrows: "",
      color: "#FF00AF" | "#6495ED",
      endX: "-9" | "12",
      endY: "12" | "11",
      startX: "0" | "-12",
      startY: "0" | "3",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-77137d" | "point-f8be02" | "point-701169",
    options: {
      color: "#FF00AF" | "#28AE7B" | "#9D38BD",
      coordX: "0" | "-3" | "-4.2",
      coordY: "0" | "4" | "5.6",
    },
  } | {
    type: "label",
    key: "label-dfd100" | "label-95dcd2" | "label-9e52e7" | "label-763d0f",
    options: {
      color: "black" | "#6495ED",
      coordX: "-3.8" | "-1" | "3" | "-4",
      coordY: "3.5" | "-1" | "6.8" | "6.4",
      label: string,
    },
  } | {
    type: "rectangle",
    key: "rectangle-e95641",
    options: {
      color: "#EDD19B",
      coordX: "x_0-1.5",
      coordY: "-2",
      height: "5",
      width: "2.8",
    },
  } | {
    type: "function",
    key: "function-68874d" | "function-9e5da7",
    options: {
      color: "#6495ED",
      funcName: "f" | "g",
      rangeMax: "6" | "9",
      rangeMin: "0" | "6",
      strokeDasharray: "",
      strokeWidth: number,
      value: string,
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "y",
      constraintFn: "3",
      constraintXMax: "8",
      constraintXMin: "1.5",
      constraintYMax: "3",
      constraintYMin: "3",
      snap: number,
      startX: "1.5",
      startY: "3",
      varSubscript: number,
    },
  } | {
    type: "line",
    key: "line-426b09" | "line-9d536a",
    options: {
      arrows: "",
      color: "#FF00AF" | "#6495ED",
      endX: "12" | "1",
      endY: "8" | "10",
      startX: "0" | "10",
      startY: "0" | "-8",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-77137d" | "point-f8be02" | "point-60b8a3",
    options: {
      color: "#FF00AF" | "#28AE7B" | "#9D38BD",
      coordX: "0" | "3" | "4.5",
      coordY: "0" | "2" | "3",
    },
  } | {
    type: "label",
    key: "label-dfd100" | "label-95dcd2" | "label-9e52e7" | "label-4046ea",
    options: {
      color: "black" | "#6495ED",
      coordX: "3" | "-1" | "5.5" | "4.6",
      coordY: "1" | "-1" | "-5.5" | "3.8",
      label: "P" | "C" | "$y + 2x - 12 = 0$" | "I",
    },
  } | {
    type: "line",
    key: "line-f4728a" | "line-121fa0" | "line-a94d1" | "line-df92f2" | "line-7a82b5" | "line-5c556b" | "line-f34755" | "line-d99204",
    options: {
      arrows: "",
      color: "black" | "#9D38BD",
      endX: "7" | "3" | "7.5" | "10",
      endY: "5" | "0" | "0.5",
      startX: "0" | "3" | "7" | "7.5",
      startY: "5" | "0" | "0.5",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-456d78" | "label-dd5687" | "label-2eef0d",
    options: {
      color: "black",
      coordX: "3.5" | "6.4" | "9",
      coordY: "5.5" | "2.5",
      label: "7" | "5" | "6",
    },
  } | {
    type: "line",
    key: "line-f4728a" | "line-323466" | "line-f34755" | "line-e9db0" | "line-7a82b5" | "line-5c556b" | "line-dbaf34" | "line-3136a8" | "line-dae6c1",
    options: {
      arrows: "",
      color: "black",
      endX: "0" | "5" | ".5",
      endY: "2" | "5" | "1.5" | "3",
      startX: "0" | "5" | ".5",
      startY: "0" | "2" | "3" | "1.5",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-456d78" | "label-dd5687",
    options: {
      color: "black",
      coordX: "5.5" | "2.5",
      coordY: "3.5" | "2.5",
      label: "3" | "h",
    },
  } | {
    type: "rectangle",
    key: "rectangle-1031fe" | "rectangle-3f11c2" | "rectangle-8a957a" | "rectangle-ac3d9f" | "rectangle-95804b" | "rectangle-e84c60",
    options: {
      color: "#9AB8ED",
      coordX: "-7" | "-5" | "-3" | "-1" | "1" | "3",
      coordY: "0",
      height: string,
      width: "2",
    },
  } | {
    type: "function",
    key: "function-9f5cf9",
    options: {
      color: "#6495ED",
      funcName: "f",
      rangeMax: "10",
      rangeMin: "-7",
      strokeDasharray: "",
      strokeWidth: number,
      value: string,
    },
  } | {
    type: "line",
    key: "line-e66c92",
    options: {
      arrows: "",
      color: "black",
      endX: "6",
      endY: "-4",
      startX: "2",
      startY: "-4",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-d8f52a" | "point-e50fb6" | "point-df0a4c",
    options: {
      color: "black",
      coordX: "2" | "4" | "6",
      coordY: "-4",
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "snap",
      constraintFn: "-4",
      constraintXMax: "6",
      constraintXMin: "2",
      constraintYMax: "-4",
      constraintYMin: "-4",
      snap: number,
      startX: "2",
      startY: "-4",
      varSubscript: number,
    },
  } | {
    type: "label",
    key: "label-93ece" | "label-f183c7" | "label-971320",
    options: {
      color: "black",
      coordX: "1.5" | "4" | "6.5",
      coordY: "-5",
      label: "\\small{L(6)}" | "\\small{M(6)}" | "\\small{R(6)}",
    },
  } | {
    type: "line",
    key: "line-4aa0bd",
    options: {
      arrows: "",
      color: "#6495ED",
      endX: "10",
      endY: "8",
      startX: "-8",
      startY: "-4",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-921e7c" | "point-e27bd7" | "point-954364",
    options: {
      color: "#6495ED" | "#28AE7B" | "#FF00AF",
      coordX: "-8" | "-5" | "1",
      coordY: "-4" | "-2" | "2",
    },
  } | {
    type: "label",
    key: "label-ceb874" | "label-568fab" | "label-f05af4",
    options: {
      color: "black",
      coordX: "-8" | "-5" | "1",
      coordY: "-5" | "-3" | "3",
      label: "C" | "P" | "I",
    },
  } | {
    type: "line",
    key: string,
    options: {
      arrows: "",
      color: "black",
      endX: string,
      endY: "0" | "-0.2" | "1.3",
      startX: string,
      startY: "0" | "0.2" | "1.3",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "y",
      constraintFn: "0.5",
      constraintXMax: "10",
      constraintXMin: "0",
      constraintYMax: "10",
      constraintYMin: "-10",
      snap: number,
      startX: "5",
      startY: "0.5",
      varSubscript: number,
    },
  } | {
    type: "point",
    key: "point-17e430" | "point-245bd1",
    options: {
      color: "black",
      coordX: "3" | "4.5",
      coordY: "0.5",
    },
  } | {
    type: "label",
    key: "label-efb11d" | "label-e74bc0",
    options: {
      color: "black",
      coordX: string,
      coordY: "1.6" | "1.9",
      label: "\\text{mean}" | "\\text{median}",
    },
  } | {
    type: "point",
    key: "point-58be31" | "point-76fcfd" | "point-123abf",
    options: {
      color: "#6495ED",
      coordX: "-4" | "8" | "2",
      coordY: "2" | "-6" | "7",
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "none",
      constraintFn: "0",
      constraintXMax: "10",
      constraintXMin: "-10",
      constraintYMax: "10",
      constraintYMin: "-10",
      snap: number,
      startX: "-6" | "5",
      startY: "4" | "-2",
      varSubscript: number,
    },
  } | {
    type: "line",
    key: "line-48c1ba" | "line-30f0c5" | "line-ddab9c" | "line-20d05f",
    options: {
      arrows: "",
      color: "black",
      endX: "x_1" | "x_0",
      endY: "y_1",
      startX: string,
      startY: string,
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-a4bdbe" | "point-fd12dc",
    options: {
      color: "black",
      coordX: string,
      coordY: string,
    },
  } | {
    type: "label",
    key: "label-52c637" | "label-4d793e" | "label-16f184" | "label-21eaa2",
    options: {
      color: "black",
      coordX: string,
      coordY: string,
      label: "C" | "A" | "B" | "D",
    },
  } | {
    type: "line",
    key: "line-73c0c8" | "line-db3726" | "line-48c1ba" | "line-30f0c5" | "line-ddab9c" | "line-20d05f",
    options: {
      arrows: "->" | "",
      color: "black" | "#6495ED",
      endX: "10" | "0" | "x_1" | "x_0",
      endY: "0" | "10" | "y_1",
      startX: string,
      startY: string,
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "movable-point",
    key: string,
    options: {
      constraint: "none",
      constraintFn: "0",
      constraintXMax: "0" | "10",
      constraintXMin: "0" | "-10",
      constraintYMax: "10" | "0",
      constraintYMin: "-10" | "0",
      snap: number,
      startX: "0" | "5",
      startY: "4" | "0",
      varSubscript: number,
    },
  } | {
    type: "label",
    key: "label-52c637" | "label-4d793e" | "label-16f184" | "label-21eaa2",
    options: {
      color: "black",
      coordX: string,
      coordY: string,
      label: "C\\\\(0,0)" | "A\\\\(0,m)" | "B\\\\(n,0)" | "D",
    },
  } | {
    type: "line",
    key: "line-f4728a" | "line-121fa0" | "line-a94d1" | "line-323466" | "line-df92f2" | "line-e91591" | "line-7a82b5" | "line-5c556b" | "line-f34755",
    options: {
      arrows: "",
      color: "black",
      endX: "10" | "0" | "3" | "7" | "2.5",
      endY: "5" | "0" | "0.5",
      startX: "3" | "0" | "10" | "2.5",
      startY: "5" | "0" | "0.5",
      strokeDasharray: "" | ".",
      strokeWidth: number,
    },
  } | {
    type: "label",
    key: "label-456d78" | "label-dd5687" | "label-25261e",
    options: {
      color: "black",
      coordX: "6" | "3.5" | "1",
      coordY: "5.5" | "2.5",
      label: "7" | "5" | "6",
    },
  } | {
    type: "line",
    key: "line-426b09" | "line-9d536a",
    options: {
      arrows: "",
      color: "#FF00AF" | "#6495ED",
      endX: "8" | "9",
      endY: "12" | "-12",
      startX: "0",
      startY: "0" | "15",
      strokeDasharray: "",
      strokeWidth: number,
    },
  } | {
    type: "point",
    key: "point-77137d" | "point-f8be02" | "point-701169",
    options: {
      color: "#FF00AF" | "#28AE7B" | "#9D38BD",
      coordX: "0" | "2" | "\\frac{10}{3}",
      coordY: "0" | "3" | "5",
    },
  } | {
    type: "label",
    key: "label-dfd100" | "label-95dcd2" | "label-9e52e7" | "label-763d0f",
    options: {
      color: "black" | "#6495ED",
      coordX: "2.5" | "-1" | "4.5" | "4",
      coordY: "2.5" | "-1" | "-8.5" | "4.5",
      label: "P" | "C" | "$3x + y -15 = 0$" | "I",
    },
  } | {
    type: "label",
    key: "label-dfd100" | "label-95dcd2" | "label-9e52e7" | "label-763d0f",
    options: {
      color: "black" | "#6495ED",
      coordX: "2.5" | "-1" | "4.5" | "4",
      coordY: "2.5" | "-1" | "-8.5" | "4.5",
      label: "P" | "C" | "$y = -3x + 15$" | "I",
    },
  })[],
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
  categories: ("Tumbler" | "Rolly" | "Topple" | "Twisty" | "Gymbo" | "Rose" | "Daffodil" | "Tulip")[],
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
  categories: ("$1$" | "$2$" | "$3$" | "$4$" | "$5$" | "$>0$" | "$>5$" | "$>10$" | "$>15$" | "$<2$" | "$<4$" | "$<6$" | "$<8$" | "$>30$" | "$>45$")[],
  correct: number[],
  labelInterval: number,
  labels: ["Number of pictures" | "number of books" | "family size" | "Time (in seconds)", string],
  maxY: number,
  scaleY: number,
  snapsPerLine: number,
  starting: number[],
} | {
  type: "histogram",
  categories: ("$0$" | "$100$" | "$200$" | "$300$" | "$25$" | "$50$" | "$75$" | "$5$" | "$10$" | "$15$" | "$20$" | "$3$" | "$6$" | "$9$" | "$12$")[],
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