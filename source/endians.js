class Bin32 {
    constructor(n) {
        this.n = n
        let bytes = [];
        for (let i = 0; i < 4; ++i) {
            let s = '';
            for (let j = 0; j < 8; ++j) {
                let bit = n % 2;
                n = Math.floor(n / 2);
                s = bit + s;
            }
            bytes.push(s);
        }
        this.bytes = bytes.reverse();   // store bytes in big endian order
    }

    littleEndian(delimiter) {
        return new Array(...this.bytes).reverse().join(delimiter);
    }

    bigEndian(delimiter) {
        return this.bytes.join(delimiter);
    }

    get bytesReversed() {
        return parseInt(this.littleEndian(''), 2);
    }
}

function solve(n) {
    return new Bin32(n).bytesReversed;
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin
    });
    let hasCases = false;
    rl.on('line', (line) => {
        if (hasCases == false) {
            hasCases = true;
        } else {
            const n = parseInt(line, 10);
            console.log(solve(n));
        }
    });
} else {
    exports.Bin32 = Bin32;
    exports.solve = solve;
}
