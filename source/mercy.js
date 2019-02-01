function push(n, s) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(s);
  }

  return result;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin
  });
  rl.on('line', line => {
    const result = push(line.trim(), 'Hello Algospot!');
    result.forEach(s => console.log(s));
  });
} else {
  exports.push = push;
}
