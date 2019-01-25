function push(n, s) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(s);
    }
    return result;
}

if (require.main === module) {
    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin
    });
    rl.on('line', (line) => {
        let result = push(line.trim(), 'Hello Algospot!');
        result.forEach((s) => console.log(s));
    });
} else {
    exports.push = push;
}
