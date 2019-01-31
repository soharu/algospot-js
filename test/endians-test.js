const assert = require('assert');
const endians = require('../source/endians.js');

describe('ENDIANS', function() {
    describe('solve', function() {
        it('should return a number reversed bytes order', function() {
            assert.strictEqual(endians.solve(2018915346), 305419896);
            assert.strictEqual(endians.solve(1), 16777216);
            assert.strictEqual(endians.solve(100000), 2693136640);
            assert.strictEqual(endians.solve(4294967295), 4294967295);
        });
    });
});
