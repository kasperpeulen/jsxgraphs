var board = JXG.JSXGraph.initBoard("jxg3826", {
  axis: true
});

board.create('functiongraph',
  function (x) { return Math.log(x); }, {
    strokeColor: Color.blue,
    label: {
      strokeColor: Color.blue,
    },
    name: tex('f(x) = \\ln(x)'),
  }
);

board.create('functiongraph',
  function (x) { return 1/x; }, {
    strokeColor: Color.red,
    label: {
      position: 'top',
      offset: [-70,-20],
      strokeColor: Color.red,
    },
    name: tex('f\'(x)=\\frac{1}{x}'),
  }
);

board.create('functiongraph',
  function (x) { return Math.exp(x); }, {
    strokeColor: Color.green,
    label: {
      position: 'top',
      strokeColor: Color.green,
    },
    name: tex('g(x)=e(x)=g\'(x)'),
  }
);