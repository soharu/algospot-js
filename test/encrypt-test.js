const assert = require('assert');
const encrypt = require('../source/encrypt.js');

describe('ENCRYPT', () => {
  it('should encrypt input string', () => {
    assert.strictEqual(encrypt.solve('A'), 'A');
    assert.strictEqual(encrypt.solve('Ab'), 'Ab');
    assert.strictEqual(encrypt.solve('AbC'), 'ACb');
    assert.strictEqual(encrypt.solve('AbCc'), 'ACbc');
    assert.strictEqual(encrypt.solve('HelloWorld'), 'HloolelWrd');
  });
});
