var board = JXG.JSXGraph.initBoard("jxg3826", {
  axis: true
});

board.create('functiongraph',
  function (x) { return Math.log(x); }, {
    strokeColor: Color.blue,
    withLabel: true,
    label: {
      strokeColor: Color.blue,
    },
    name: tex('f(x) = \\ln(x)'),
  }
);

board.create('functiongraph',
  function (x) { return 1/x; }, {
    strokeColor: Color.red,
    withLabel: true,
    label: {
      position: 'top',
      strokeColor: Color.red,
    },
    name: tex('f\'(x)=\\frac{1}{x}'),
  }
);