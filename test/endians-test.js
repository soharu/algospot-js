const assert = require('assert');
const endians = require('../source/endians.js');

const Bin32 = endians.Bin32;

describe('ENDIANS', function() {
    describe('Bin32', function() {
        it('represents 32-bits binary number: n = 0', function() {
            let b = new Bin32(0);
            assert.strictEqual(b.n, 0);
            assert.strictEqual(b.bytes[3], '00000000');
            assert.strictEqual(b.bytes[2], '00000000');
            assert.strictEqual(b.bytes[1], '00000000');
            assert.strictEqual(b.bytes[0], '00000000');
            assert.strictEqual(b.bigEndian('_'), '00000000_00000000_00000000_00000000');
            assert.strictEqual(b.littleEndian('_'), '00000000_00000000_00000000_00000000');
        });

        it('represents 32-bits binary number: n = 1', function() {
            let b = new Bin32(1);
            assert.strictEqual(b.n, 1);
            assert.strictEqual(b.bytes[3], '00000001');
            assert.strictEqual(b.bytes[2], '00000000');
            assert.strictEqual(b.bytes[1], '00000000');
            assert.strictEqual(b.bytes[0], '00000000');
            assert.strictEqual(b.littleEndian('_'), '00000001_00000000_00000000_00000000');
            assert.strictEqual(b.bigEndian('_'), '00000000_00000000_00000000_00000001');
            assert.strictEqual(b.bytesReversed, 16777216);
        });

        it('represents 32-bits binary number: n = 305419896', function() {
            let b = new Bin32(305419896);
            assert.strictEqual(b.n, 305419896);
            assert.strictEqual(b.bytes[3], '01111000');
            assert.strictEqual(b.bytes[2], '01010110');
            assert.strictEqual(b.bytes[1], '00110100');
            assert.strictEqual(b.bytes[0], '00010010');
            assert.strictEqual(b.littleEndian('_'), '01111000_01010110_00110100_00010010');
            assert.strictEqual(b.bigEndian('_'), '00010010_00110100_01010110_01111000');
            assert.strictEqual(b.bytesReversed, 2018915346);
        });

        it('represents 32-bits binary number: n = 0x12345678', function() {
            let b = new Bin32(0x12345678);
            assert.strictEqual(b.n, 0x12345678);
            assert.strictEqual(b.bytes[3], '01111000');
            assert.strictEqual(b.bytes[2], '01010110');
            assert.strictEqual(b.bytes[1], '00110100');
            assert.strictEqual(b.bytes[0], '00010010');
            assert.strictEqual(b.littleEndian('_'), '01111000_01010110_00110100_00010010');
            assert.strictEqual(b.bigEndian('_'), '00010010_00110100_01010110_01111000');
            assert.strictEqual(b.bytesReversed, 2018915346);
        });

        it('represents 32-bits binary number: n = 0xFFFFFFFF', function() {
            let b = new Bin32(0xFFFFFFFF);
            assert.strictEqual(b.n, 0xFFFFFFFF);
            assert.strictEqual(b.bytes[3], '11111111');
            assert.strictEqual(b.bytes[2], '11111111');
            assert.strictEqual(b.bytes[1], '11111111');
            assert.strictEqual(b.bytes[0], '11111111');
            assert.strictEqual(b.littleEndian('_'), '11111111_11111111_11111111_11111111');
            assert.strictEqual(b.bigEndian('_'), '11111111_11111111_11111111_11111111');
            assert.strictEqual(b.bytesReversed, 4294967295);
        });
    });

    describe('solve', function() {
        it('should return a number reversed bytes order', function() {
            assert.strictEqual(endians.solve(2018915346), 305419896);
            assert.strictEqual(endians.solve(1), 16777216);
            assert.strictEqual(endians.solve(100000), 2693136640);
            assert.strictEqual(endians.solve(4294967295), 4294967295);
        });
    });

    describe('parseInt', function() {
        it('convert integer string to hex number', function() {
            assert.strictEqual(parseInt('10', 2), 2);
            assert.strictEqual(parseInt('1', 2), 1);
            assert.strictEqual(parseInt('010', 2), 2);
            assert.strictEqual(parseInt('1010', 2), 10);
            assert.strictEqual(parseInt('00001000', 2), 8);
            assert.strictEqual(parseInt('0x10', 16), 16);
            assert.strictEqual(parseInt('00000001000000000000000000000000', 2), 16777216)
        });
    });
});
