const assert = require('assert');
const drawrect = require('../source/drawrect.js');

describe('DRAWRECT', () => {
  describe('solve', () => {
    it('should return a point on the rectangle (1): missing top-left', () => {
      const points = [
        [5, 7], [7, 5], [7, 7]
      ];
      assert.deepStrictEqual(drawrect.solve(points), [5, 5]);
    });

    it('should return a point on the rectangle (2): missing top-right', () => {
      const points = [
        [5, 5], [5, 7], [7, 7]
      ];
      assert.deepStrictEqual(drawrect.solve(points), [7, 5]);
    });

    it('should return a point on the rectangle (3): missing bottom-left', () => {
      const points = [
        [5, 5], [7, 5], [7, 7]
      ];
      assert.deepStrictEqual(drawrect.solve(points), [5, 7]);
    });

    it('should return a point on the rectangle (4): missing bottom-right: ', () => {
      const points = [
        [5, 5], [7, 5], [5, 7]
      ];
      assert.deepStrictEqual(drawrect.solve(points), [7, 7]);
    });

    it('should return a point on the rectangle (5)', () => {
      const points = [
        [30, 20], [10, 10], [10, 20]
      ];
      assert.deepStrictEqual(drawrect.solve(points), [30, 10]);
    });
  });
});
