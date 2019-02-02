function solve(s) {
  const arr = [...s];
  return arr.filter((c, i) => i % 2 === 0).join('') +
    arr.filter((c, i) => i % 2 === 1).join('');
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
    inputs.slice(1, 1 + inputs[0]).map(s => console.log(solve(s)));
  });
} else {
  exports.solve = solve;
}
