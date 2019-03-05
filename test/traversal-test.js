const assert = require('assert');
const traversal = require('../source/traversal.js');

describe('TRAVERSAL', () => {
  it('should traverse a tree in post-order', () => {
    assert.deepStrictEqual(
      traversal.solve([2, 1, 3], [1, 2, 3]),
      [1, 3, 2]);
    assert.deepStrictEqual(
      traversal.solve([2, 1, 3, 4], [1, 2, 3, 4]),
      [1, 4, 3, 2]);
    assert.deepStrictEqual(
      traversal.solve([27, 16, 9, 12, 54, 36, 72], [9, 12, 16, 27, 36, 54, 27]),
      [12, 9, 16, 36, 72, 54, 27]);
    assert.deepStrictEqual(
      traversal.solve([5, 3, 2, 4, 6, 7, 8], [2, 3, 4, 5, 7, 6, 8]),
      [2, 4, 3, 7, 8, 6, 5]);
    assert.deepStrictEqual(
      traversal.solve([409, 479, 10, 838, 150, 441], [409, 10, 479, 150, 838, 441]),
      [10, 150, 441, 838, 479, 409]);
  });
});
