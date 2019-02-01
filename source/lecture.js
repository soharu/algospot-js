function solve(str) {
    const count = str.length / 2;
    let subs = [];
    for (let i = 0; i < count; ++i) {
        subs.push(str.slice(i * 2, (i + 1) * 2));
    }
    return subs.sort().join('');
}

if (require.main === module) {
    const rl = require('readline').createInterface({ input: process.stdin });
    let inputs = [];
    rl.on('line', (line) => {
        inputs.push(line.trim());
    });
    rl.on('close', () => {
        inputs.slice(1, 1 + inputs[0]).map((s) => console.log(solve(s)));
    });
} else {
    exports.solve = solve;
}
