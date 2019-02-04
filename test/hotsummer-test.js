const assert = require('assert');
const hotsummer = require('../source/hotsummer.js');

describe('HOTSUMMER', () => {
  it('solve()', () => {
    assert.strictEqual(hotsummer.solve(5, [1, 2, 3]), 'NO');
    assert.strictEqual(hotsummer.solve(10, [1, 2, 3]), 'YES');
    assert.strictEqual(hotsummer.solve(90, [10, 10, 10, 10, 10, 10, 10, 10, 10]), 'YES');
    assert.strictEqual(hotsummer.solve(1000, [77, 77, 70, 11, 34, 35, 41, 83, 54]), 'YES');
    assert.strictEqual(hotsummer.solve(50, [10, 20, 30, 40, 50, 60, 50, 40, 30]), 'NO');
  });
});
