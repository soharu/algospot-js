const assert = require('assert');
const drawrect = require('../source/drawrect.js');

describe('DRAWRECT', function() {
    describe('solve', function() {
        it('should return a point on the rectangle (1): missing top-left', function() {
            const points = [
                [5, 7], [7, 5], [7, 7]
            ];
            assert.deepEqual(drawrect.solve(points), [5, 5]);
        });

        it('should return a point on the rectangle (2): missing top-right', function() {
            const points = [
                [5, 5], [5, 7], [7, 7]
            ];
            assert.deepEqual(drawrect.solve(points), [7, 5]);
        });

        it('should return a point on the rectangle (3): missing bottom-left', function() {
            const points = [
                [5, 5], [7, 5], [7, 7]
            ];
            assert.deepEqual(drawrect.solve(points), [5, 7]);
        });

        it('should return a point on the rectangle (4): missing bottom-right: ', function() {
            const points = [
                [5, 5], [7, 5], [5, 7]
            ];
            assert.deepEqual(drawrect.solve(points), [7, 7]);
        });

        it('should return a point on the rectangle (5)', function() {
            const points = [
                [30, 20], [10, 10], [10, 20]
            ];
            assert.deepEqual(drawrect.solve(points), [30, 10]);
        });
    });
});
