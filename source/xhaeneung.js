const convert = (function () {
  const makeKey = v => [...v].sort().join('');
  const conversionTable = (function () {
    const table = {
      '=': '===',
      '+': '+',
      '-': '-',
      '*': '*'
    };
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    numbers.map(makeKey).forEach((v, i) => {
      table[v] = i;
    });
    return table;
  })();
  return v => {
    const key = makeKey(v);
    const newValue = conversionTable[key];
    return newValue === undefined ? '-1000' : newValue;
  };
})();

function solve(str) {
  const exp = str.split(' ').map(convert).join(' ');
  return eval(exp) ? 'Yes' : 'No';
}

if (require.main === module) {
  const inputs = [];
  require('readline')
    .createInterface({
      input: process.stdin
    })
    .on('line', line => {
      inputs.push(line.trim());
    })
    .on('close', () => {
      inputs.slice(1, 1 + inputs[0])
        .map(input => console.log(solve(input)));
    });
} else {
  exports.solve = solve;
  exports.convert = convert;
}
