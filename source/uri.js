function solve(str) {
  const table = [
    {pattern: /%20/g, value: ' '},
    {pattern: /%21/g, value: '!'},
    {pattern: /%24/g, value: '$'},
    {pattern: /%28/g, value: '('},
    {pattern: /%29/g, value: ')'},
    {pattern: /%2a/gi, value: '*'},
    {pattern: /%25/g, value: '%'}
  ];

  return table.reduce(
    (target, matcher) => target.replace(matcher.pattern, matcher.value),
    str);
}

if (require.main === module) {
  const rl = require('readline').createInterface({
    input: process.stdin
  });
  const inputs = [];
  rl.on('line', line => {
    inputs.push(line.trim());
  });
  rl.on('close', () => {
    for (let i = 1; i < inputs.length; ++i) {
      console.log(solve(inputs[i]));
    }
  });
} else {
  exports.solve = solve;
}
