function solve(points) {
  const xs = points.map(pt => pt[0]);
  const ys = points.map(pt => pt[1]);
  const setX = new Set(xs);
  const setY = new Set(ys);
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  const x = ([...setX].reduce(sum, 0) * 2) - xs.reduce(sum, 0);
  const y = ([...setY].reduce(sum, 0) * 2) - ys.reduce(sum, 0);
  return [x, y];
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin
  });
  let inputs = [];
  const toNumber = str => parseInt(str, 10);
  rl.on('line', line => {
    inputs.push(line);
    if (inputs.length < 4) {
      return;
    }

    const pts = inputs.slice(1, 4)
      .map(line => line.split(' '))
      .map(ns => ns.map(toNumber));
    const result = solve(pts);
    console.log(`${result[0]} ${result[1]}`);
    // 처리한 건 버린다.
    inputs = inputs.slice(0, 1);
  });
} else {
  exports.solve = solve;
}
