const assert = require('assert');
const strjoin = require('../source/strjoin.js');

describe('STRJOIN', () => {
  it('should return minimum cost to join strings', () => {
    assert.strictEqual(strjoin.solve([2, 2, 4]), 12);
    assert.strictEqual(strjoin.solve([3, 1, 3, 1, 4]), 26);
    assert.strictEqual(strjoin.solve([1, 1, 1, 1, 1, 1, 1, 2]), 27);
  });
});
