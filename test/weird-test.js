const assert = require('assert');
const weird = require('../source/weird.js');

describe('WEIRD', () => {
  describe('generatePrimeNumberTable()', () => {
    it('should generate prime number table that the prime numbers are less than a number limt', () => {
      assert.deepStrictEqual(weird.generatePrimeNumberTable(10),
        [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1]);
    });

    it('should generate prime number table that the prime numbers are less than 3000', () => {
      const table = weird.generatePrimeNumberTable(3000);
      assert.deepStrictEqual(table.filter(v => v === 0).length, 430);
      assert.strictEqual(table[2473], 0);
      assert.strictEqual(table[2999], 0);
    });
  });

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
      assert.strictEqual(weird.isWeird(11), false);
      assert.strictEqual(weird.isWeird(12), false);
      assert.strictEqual(weird.isWeird(20), false);
      assert.strictEqual(weird.isWeird(70), true);
      assert.strictEqual(weird.isWeird(836), true);
      assert.strictEqual(weird.isWeird(4030), true);
      assert.strictEqual(weird.isWeird(2 ** 32), false);
      assert.strictEqual(weird.isWeird(14770), true);
      assert.strictEqual(weird.isWeird(17724), false);
      assert.strictEqual(weird.isWeird(56322), false);
      assert.strictEqual(weird.isWeird(10430), true);
      assert.strictEqual(weird.isWeird(10570), true);
      assert.strictEqual(weird.isWeird(10990), true);
      assert.strictEqual(weird.isWeird(11410), true);
    });
  });
});
