const assert = require('assert');
const mercy = require('../source/mercy.js');

describe('MERCY', function() {
    describe('solve()', function() {
        it('should contain N strings of the same', function() {
            assert.deepEqual(mercy.push(3, 'a'), ['a', 'a', 'a']);
            assert.deepEqual(mercy.push(1, 'abc'), ['abc']);
        })
    });
});