const assert = require('assert');
const lecture = require('../source/lecture.js');

describe('LECTURE', () => {
  describe('solve()', () => {
    it('should convert a input string to a single string that concat sorted substrings of length 2', () => {
      assert.strictEqual(lecture.solve('abbaaccb'), 'abacbacb');
      assert.strictEqual(lecture.solve('dddcccbbbaaa'), 'aababbccdcdd');
      assert.strictEqual(lecture.solve('geegeegeegeebabybabybaby'), 'babababybybyeeeeegeggege');
      assert.strictEqual(lecture.solve('oh'), 'oh');
    });
  });

  describe('Built-in object\'s method test', () => {
    it('String.slice()', () => {
      const s = 'aabbccdd';
      assert.strictEqual(s.slice(0, 1), 'a');
      assert.strictEqual(s.slice(0, 2), 'aa');
      assert.strictEqual(s.slice(0, 3), 'aab');
      assert.strictEqual(s.slice(2, 3), 'b');
      assert.strictEqual(s.slice(2), 'bbccdd');
      assert.strictEqual(s, 'aabbccdd');
    });
    it('Array.sort()', () => {
      assert.deepStrictEqual(['c', 'a', 'b'].sort(), ['a', 'b', 'c']);
      assert.deepStrictEqual(['ab', 'ba', 'ac', 'cb'].sort(), ['ab', 'ac', 'ba', 'cb']);
      assert.deepStrictEqual(['aa', 'aca', 'aab', 'abc'].sort(), ['aa', 'aab', 'abc', 'aca']);
    });
    it('Array.join() by empty string', () => {
      assert.deepStrictEqual(['c', 'a', 'b'].join(''), 'cab');
      assert.deepStrictEqual(['ab', 'ba', 'ac', 'cb'].join(''), 'abbaaccb');
      assert.deepStrictEqual(['aa', 'aca', 'aab', 'abc'].join(''), 'aaacaaababc');
    });
  });
});
