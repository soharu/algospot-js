function solve(points) {
    let xs = points.map(pt => pt[0]);
    let ys = points.map(pt => pt[1]);
    let setX = new Set(xs);
    let setY = new Set(ys);
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    let x = [...setX].reduce(sum, 0) * 2 - xs.reduce(sum, 0)
    let y = [...setY].reduce(sum, 0) * 2 - ys.reduce(sum, 0)
    return [x, y];
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin
    });
    let inputs = [];
    const toNumber = (str) => parseInt(str);
    rl.on('line', (line) => {
        inputs.push(line);
        if (inputs.length < 4) { return; }
        let pts = inputs.slice(1, 4)
            .map((line) => line.split(" "))
            .map((ns) => ns.map(toNumber));
        let result = solve(pts);
        console.log(`${result[0]} ${result[1]}`);
        // 처리한 건 버린다.
        inputs = inputs.slice(0, 1);
    });
} else {
    exports.solve = solve;
}
