function solve(limit, numbers) {
  const sum = numbers.reduce((previous, current) => previous + current, 0);
  return sum <= limit ? 'YES' : 'NO';
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
    for (let i = 1; i < inputs.length; i += 2) {
      const w = parseInt(inputs[i], 10);
      const numbers = inputs[i + 1].split(' ').map(n => parseInt(n, 10));
      console.log(solve(w, numbers));
    }
  });
} else {
  exports.solve = solve;
}
