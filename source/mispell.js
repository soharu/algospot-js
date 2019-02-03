function solve(n, str) {
  return str.slice(0, n - 1) + str.slice(n);
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
    inputs.slice(1, 1 + inputs[0])
      .map(input => input.split(' '))
      .map(params => solve(parseInt(params[0], 10), params[1]))
      .forEach((result, i) => console.log(`${i + 1} ${result}`));
  });
} else {
  exports.solve = solve;
}
