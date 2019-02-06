const assert = require('assert');
const xhaeneung = require('../source/xhaeneung.js');

describe('XHAENEUNG', () => {
  describe('solve()', () => {
    it('should confirm whether the addition expression is correct', () => {
      assert.strictEqual(xhaeneung.solve('zero + zero = zero'), 'Yes');
      assert.strictEqual(xhaeneung.solve('zero + zero = roze'), 'Yes');
      assert.strictEqual(xhaeneung.solve('two + three = hello'), 'No');
      assert.strictEqual(xhaeneung.solve('one + two = theer'), 'Yes');
      assert.strictEqual(xhaeneung.solve('four + five = nine'), 'Yes');
    });
    it('should confirm whether the subtraction expression is correct', () => {
      assert.strictEqual(xhaeneung.solve('zero - zero = zero'), 'Yes');
      assert.strictEqual(xhaeneung.solve('zero - one = one'), 'No');
      assert.strictEqual(xhaeneung.solve('three - two = one'), 'Yes');
      assert.strictEqual(xhaeneung.solve('ten - eight = tow'), 'Yes');
      assert.strictEqual(xhaeneung.solve('nine - four = five'), 'Yes');
    });
    it('should confirm whether the multiplication expression is correct', () => {
      assert.strictEqual(xhaeneung.solve('zero * zero = zero'), 'Yes');
      assert.strictEqual(xhaeneung.solve('zero * ten = roze'), 'Yes');
      assert.strictEqual(xhaeneung.solve('two * three = siz'), 'No');
      assert.strictEqual(xhaeneung.solve('ten * one = ten'), 'Yes');
      assert.strictEqual(xhaeneung.solve('four * two = egiht'), 'Yes');
    });
    it('should confirm whether the expression is correct', () => {
      assert.strictEqual(xhaeneung.solve('two + three = ivef'), 'Yes');
      assert.strictEqual(xhaeneung.solve('zero * zero = one'), 'No');
      assert.strictEqual(xhaeneung.solve('ten + one = eleven'), 'No');
      assert.strictEqual(xhaeneung.solve('nine - six = three'), 'Yes');
      assert.strictEqual(xhaeneung.solve('five * zero = roze'), 'Yes');
      assert.strictEqual(xhaeneung.solve('eight - seven = two'), 'No');
    });
  });
  describe('convert()', () => {
    it('should convert `=` to `===`', () => {
      assert.notStrictEqual(xhaeneung.convert('='), '=');
      assert.strictEqual(xhaeneung.convert('='), '===');
    });
    it('should convert a operator to a operator (not changed)', () => {
      assert.strictEqual(xhaeneung.convert('+'), '+');
      assert.strictEqual(xhaeneung.convert('-'), '-');
      assert.strictEqual(xhaeneung.convert('*'), '*');
    });
    it('should convert a number string to number', () => {
      // 0
      assert.strictEqual(xhaeneung.convert('zero'), 0);
      assert.strictEqual(xhaeneung.convert('erzo'), 0);
      // 1
      assert.strictEqual(xhaeneung.convert('one'), 1);
      assert.strictEqual(xhaeneung.convert('eno'), 1);
      // 2
      assert.strictEqual(xhaeneung.convert('two'), 2);
      assert.strictEqual(xhaeneung.convert('owt'), 2);
      // 3
      assert.strictEqual(xhaeneung.convert('three'), 3);
      assert.strictEqual(xhaeneung.convert('eerht'), 3);
      // 4
      assert.strictEqual(xhaeneung.convert('four'), 4);
      assert.strictEqual(xhaeneung.convert('foru'), 4);
      // 5
      assert.strictEqual(xhaeneung.convert('five'), 5);
      assert.strictEqual(xhaeneung.convert('ivef'), 5);
      // 6
      assert.strictEqual(xhaeneung.convert('six'), 6);
      assert.strictEqual(xhaeneung.convert('xis'), 6);
      // 7
      assert.strictEqual(xhaeneung.convert('seven'), 7);
      assert.strictEqual(xhaeneung.convert('eevns'), 7);
      // 8
      assert.strictEqual(xhaeneung.convert('eight'), 8);
      assert.strictEqual(xhaeneung.convert('eihtg'), 8);
      // 9
      assert.strictEqual(xhaeneung.convert('nine'), 9);
      assert.strictEqual(xhaeneung.convert('enin'), 9);
      // 10
      assert.strictEqual(xhaeneung.convert('ten'), 10);
      assert.strictEqual(xhaeneung.convert('ent'), 10);
    });
  });
  describe('eval()', () => {
    it('should evaluate the input expression', () => {
      assert.strictEqual(eval('2 + 2'), 4);
      assert.strictEqual(eval('2 - 1'), 1);
      assert.strictEqual(eval('2 * 3'), 6);
      assert.strictEqual(eval('2 * 3 == 6'), true);
    });
  });
});
