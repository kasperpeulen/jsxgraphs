// reduce flickering
MathJax.Hub.processSectionDelay = 0;

var Color = {
  red: 'rgb(199, 68, 64)',
  blue: 'rgb(45, 112, 179)',
  green: 'rgb(56, 140, 70)',
  purple: 'rgb(96, 66, 166)',
  orange: 'rgb(250, 126, 25)'
};

JXG.Options = JXG.merge(JXG.Options, {
  board: {
    showNavigation: false,
    showCopyright: false,
    useMathJax: true
  },
  elements: {
    highlight: false
  },
  text: {
    useMathJax: true,
    fixed: true,
    highlight: false
  },
  axis: {
    ticks: {
      minorTicks: 0,
      drawLabels: false
    },
    withLabel: true
  },
  curve: {
    strokeColor: Color.blue,
    strokeWidth: 2
  }
});

function tex(s) {
  return '\\\(' + s + '\\\)';
}

function tex2(s) {
  return '\\\\\(' + s + '\\\\\)';
}
