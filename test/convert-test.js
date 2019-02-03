const assert = require('assert');
const convert = require('../source/convert.js');

describe('CONVERT', () => {
  describe('Weight', () => {
    it('should convert kg to pound(lb)', () => {
      assert.strictEqual(convert.solve(0, 'kg'), '0.0000 lb');
      assert.strictEqual(convert.solve(1, 'kg'), '2.2046 lb');
      assert.strictEqual(convert.solve(0.3, 'kg'), '0.6614 lb');
      assert.strictEqual(convert.solve(0.2, 'kg'), '0.4409 lb');
      assert.strictEqual(convert.solve(0.4536, 'kg'), '1.0000 lb');
    });
    it('should convert pound to kg', () => {
      assert.strictEqual(convert.solve(0, 'lb'), '0.0000 kg');
      assert.strictEqual(convert.solve(1, 'lb'), '0.4536 kg');
      assert.strictEqual(convert.solve(2.2046, 'lb'), '1.0000 kg');
      assert.strictEqual(convert.solve(7, 'lb'), '3.1752 kg');
    });
  });
  describe('Volume', () => {
    it('should convert liter to gallons', () => {
      assert.strictEqual(convert.solve(0, 'l'), '0.0000 g');
      assert.strictEqual(convert.solve(1, 'l'), '0.2642 g');
      assert.strictEqual(convert.solve(2, 'l'), '0.5284 g');
    });
    it('should convert gallons to liter', () => {
      assert.strictEqual(convert.solve(0, 'g'), '0.0000 l');
      assert.strictEqual(convert.solve(1, 'g'), '3.7854 l');
      assert.strictEqual(convert.solve(3.5, 'g'), '13.2489 l');
    });
  });
});
