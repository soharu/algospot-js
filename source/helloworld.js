function sayHello(name) {
  return `Hello, ${name.trim()}!`;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin
  });
  let lineCounts = 0;
  rl.on('line', line => {
    lineCounts += 1;
    if (lineCounts === 1) {
      // ignore the first line
      return;
    }

    console.log(sayHello(line));
  });
} else {
  exports.sayHello = sayHello;
}
