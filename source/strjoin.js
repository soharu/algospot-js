function countCost(totalCost, sizes) {
  if (sizes.length < 2) {
    return totalCost;
  }
  sizes.sort((a, b) => a - b);
  const cost = sizes[0] + sizes[1];
  const rest = sizes.slice(2);
  rest.push(cost);
  return countCost(totalCost + cost, rest);
}

function solve(sizes) {
  return countCost(0, sizes);
}

if (require.main === module) {
  const inputs = [];
  require('readline').createInterface({
    input: process.stdin
  }).on('line', line => {
    inputs.push(line.trim());
  }).on('close', () => {
    const count = inputs[0] * 2;
    for (let i = 1; i <= count; i += 2) {
      const numbers = inputs[i + 1].split(' ').map(v => parseInt(v, 10));
      console.log(solve(numbers));
    }
  });
} else {
  exports.solve = solve;
}
