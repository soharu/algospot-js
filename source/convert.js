function solve(value, unit) {
  const rule = {
    kg: number => (number * 2.2046).toFixed(4) + ' lb',
    lb: number => (number * 0.4536).toFixed(4) + ' kg',
    l: number => (number * 0.2642).toFixed(4) + ' g',
    g: number => (number * 3.7854).toFixed(4) + ' l'
  };

  return rule[unit](value);
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
    for (let i = 1; i <= inputs[0]; ++i) {
      const arr = inputs[i].split(' ');
      console.log(`${i} ${solve(arr[0], arr[1])}`);
    }
  });
} else {
  exports.solve = solve;
}
