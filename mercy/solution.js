let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (line) => {
    let count = line.trim();
    for (var i = 0; i < count; i++) {
        console.log('Hello Algospot!');
    }
});
