const assert = require('assert');
const weird = require('../source/weird.js');

describe('WEIRD', () => {
  describe('sort integer array', () => {
    it('ascending order', () => {
      assert.deepStrictEqual([1, 11, 12, 3].sort((a, b) => a - b), [1, 3, 11, 12]);
    });
    it('descending order', () => {
      assert.deepStrictEqual([1, 11, 12, 3].sort((a, b) => b - a), [12, 11, 3, 1]);
    });
  });

  describe('getProperDivisors()', () => {
    it('should return an array that contains proper divisors of a number', () => {
      assert.deepStrictEqual(weird.getProperDivisors(2), [1]);
      assert.deepStrictEqual(weird.getProperDivisors(3), [1]);
      assert.deepStrictEqual(weird.getProperDivisors(4), [2, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(8), [4, 2, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(9), [3, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(12), [6, 4, 3, 2, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(20), [10, 5, 4, 2, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(25), [5, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(70), [35, 14, 10, 7, 5, 2, 1]);
      assert.deepStrictEqual(weird.getProperDivisors(1024), [512, 256, 128, 64, 32, 16, 8, 4, 2, 1]);
    });
  });

  describe('isWeird()', () => {
    it('should check whether a number is weird', () => {
      for (let i = 2; i < 70; ++i) {
        assert.strictEqual(weird.isWeird(i), false, `${i} should not be weird.`);
      }
      assert.strictEqual(weird.isWeird(70), true);
      assert.strictEqual(weird.isWeird(836), true);
      assert.strictEqual(weird.isWeird(4030), true);
      assert.strictEqual(weird.isWeird(2 ** 16), false);
      assert.strictEqual(weird.isWeird(14770), true);
      assert.strictEqual(weird.isWeird(17724), false);
      assert.strictEqual(weird.isWeird(56322), false);
      assert.strictEqual(weird.isWeird(10430), true);
      assert.strictEqual(weird.isWeird(10570), true);
      assert.strictEqual(weird.isWeird(10990), true);
      assert.strictEqual(weird.isWeird(11410), true);
      const primitiveWeridNumbers = [
        70, 836, 4030, 5830, 7192, 7912, 9272, 10792, 17272, 45356, 73616, 83312, 91388, 113072, 243892, 254012, 338572, 343876, 388076, 519712
      ];
      primitiveWeridNumbers.forEach(v => {
        assert.strictEqual(weird.isWeird(v), true, `${v} should be weird.`);
      });
    });
  });
});
