const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let lineCounts = 0;
rl.on('line', (line) => {
    lineCounts += 1;
    if (lineCounts == 1) { return; } // ignore the first line
    let name = line.trim();
    console.log(`Hello, ${name}!`);
});
