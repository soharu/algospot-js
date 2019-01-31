function solve(n) {
    return (((n & 0xFF) << 24)
        | ((n & 0xFF00) << 8)
        | ((n & 0xFF0000) >> 8)
        | ((n & 0xFF000000) >> 24)) >>> 0;
}

if (require.main === module) {
    const rl = require('readline').createInterface({
        input: process.stdin
    });
    let lines = [];
    rl.on('line', (line) => {
        lines.push(line.trim());
    });
    rl.on('close', () => {
        lines.slice(1, lines.length).forEach((n) => console.log(solve(n)));
    });
} else {
    exports.solve = solve;
}
