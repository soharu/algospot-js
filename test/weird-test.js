const assert = require('assert');
const weird = require('../source/weird.js');

describe('WEIRD', () => {
  describe('getProperDivisors()', () => {
    it('should return an array that contains proper divisors of a number', () => {
      assert.deepStrictEqual(weird.getProperDivisors(2), [1]);
      assert.deepStrictEqual(weird.getProperDivisors(3), [1]);
      assert.deepStrictEqual(weird.getProperDivisors(4), [1, 2]);
      assert.deepStrictEqual(weird.getProperDivisors(8), [1, 2, 4]);
      assert.deepStrictEqual(weird.getProperDivisors(9), [1, 3]);
      assert.deepStrictEqual(weird.getProperDivisors(12), [1, 2, 3, 4, 6]);
      assert.deepStrictEqual(weird.getProperDivisors(20), [1, 2, 4, 5, 10]);
      assert.deepStrictEqual(weird.getProperDivisors(70), [1, 2, 5, 7, 10, 14, 35]);
      assert.deepStrictEqual(weird.getProperDivisors(1024), [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]);
    });
  });

  describe('generateBitArray()', () => {
    it('should generate a bit array of the number', () => {
      assert.deepStrictEqual(weird.generateBitArray(1, 3), [0, 0, 1]);
      assert.deepStrictEqual(weird.generateBitArray(2, 3), [0, 1, 0]);
      assert.deepStrictEqual(weird.generateBitArray(3, 3), [0, 1, 1]);
      assert.deepStrictEqual(weird.generateBitArray(4, 3), [1, 0, 0]);
      assert.deepStrictEqual(weird.generateBitArray(5, 3), [1, 0, 1]);
      assert.deepStrictEqual(weird.generateBitArray(6, 3), [1, 1, 0]);
      assert.deepStrictEqual(weird.generateBitArray(7, 3), [1, 1, 1]);
    });
  });

  describe('subset generator', () => {
    it('should generate subsets of array', () => {
      const subsets = weird.subsets([1, 2, 3]);
      assert.deepStrictEqual(subsets.next().value, [3]);
      assert.deepStrictEqual(subsets.next().value, [2]);
      assert.deepStrictEqual(subsets.next().value, [2, 3]);
      assert.deepStrictEqual(subsets.next().value, [1]);
      assert.deepStrictEqual(subsets.next().value, [1, 3]);
      assert.deepStrictEqual(subsets.next().value, [1, 2]);
      assert.deepStrictEqual(subsets.next().value, [1, 2, 3]);
    });
  });

  describe('sum()', () => {
    it('should sum all numbers in array', () => {
      assert.strictEqual(weird.sum([1, 1, 1]), 3);
      assert.strictEqual(weird.sum([1, 2, 3]), 6);
      assert.strictEqual(weird.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
    });
  });

  describe('isWeird()', () => {
    it('should check whether a number is weird', () => {
      assert.strictEqual(weird.isWeird(2), false);
      assert.strictEqual(weird.isWeird(3), false);
      assert.strictEqual(weird.isWeird(8), false);
      assert.strictEqual(weird.isWeird(9), false);
      assert.strictEqual(weird.isWeird(12), false);
      assert.strictEqual(weird.isWeird(20), false);
      assert.strictEqual(weird.isWeird(70), true);
      assert.strictEqual(weird.isWeird(836), true);
      assert.strictEqual(weird.isWeird(4030), true);
      assert.strictEqual(weird.isWeird(2 ** 32), false);
      assert.strictEqual(weird.isWeird(14770), true);
      assert.strictEqual(weird.isWeird(17724), false);
      assert.strictEqual(weird.isWeird(56322), false);
    });

    it('should check whether two hundred numbers are weird in 3 seconds', () => {
      const maxNumber = 500000;
      for (let i = 0; i < 200; ++i) {
        const n = Math.trunc(maxNumber * Math.random());
        weird.isWeird(n);
      }
    }).timeout(3000);
  });

  describe('check()', () => {
    it('should check whether a number is weird', () => {
      assert.strictEqual(weird.check(12), 'not weird');
      assert.strictEqual(weird.check(70), 'weird');
    });
  });
});
