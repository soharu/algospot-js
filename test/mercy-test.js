const assert = require('assert');
const mercy = require('../source/mercy.js');

describe('MERCY', () => {
  describe('solve()', () => {
    it('should contain N strings of the same', () => {
      assert.deepStrictEqual(mercy.push(3, 'a'), ['a', 'a', 'a']);
      assert.deepStrictEqual(mercy.push(1, 'abc'), ['abc']);
    });
  });
});
