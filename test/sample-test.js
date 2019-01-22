const assert = require('assert');

describe('SAMPLE', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
      assert.equal([1,2,3].indexOf(3), 2);
    });
    it('should return 2 when the value is 3', function() {
        assert.equal([1,2,3].indexOf(3), 2);
      });
  });
});