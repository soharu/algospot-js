const assert = require('assert');
const mispell = require('../source/mispell.js');

describe('MISPELL', () => {
  it('should remove n-th character from a input string', () => {
    assert.strictEqual(mispell.solve(1, 'A'), '');
    assert.strictEqual(mispell.solve(1, 'ABC'), 'BC');
    assert.strictEqual(mispell.solve(2, 'ABC'), 'AC');
    assert.strictEqual(mispell.solve(3, 'ABC'), 'AB');
    assert.strictEqual(mispell.solve(4, 'MISSPELL'), 'MISPELL');
    assert.strictEqual(mispell.solve(1, 'PROGRAMMING'), 'ROGRAMMING');
    assert.strictEqual(mispell.solve(7, 'CONTEST'), 'CONTES');
    assert.strictEqual(mispell.solve(3, 'BALLOON'), 'BALOON');
  });
});
