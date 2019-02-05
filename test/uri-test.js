const assert = require('assert');
const uri = require('../source/uri.js');

describe('URI', () => {
  it('should decode a percent-encoded string', () => {
    assert.strictEqual(uri.solve('hello'), 'hello');
    assert.strictEqual(uri.solve('Happy%20Joy'), 'Happy Joy');
    assert.strictEqual(uri.solve('Happy%20Joy%20Joy'), 'Happy Joy Joy');
    assert.strictEqual(uri.solve('Happy%20Joy%21%20Joy%21'), 'Happy Joy! Joy!');
    assert.strictEqual(uri.solve('%24Happy%24%20Joy%21%20Joy%21'), '$Happy$ Joy! Joy!');
    assert.strictEqual(uri.solve('%25s,%20%24Happy%24%20Joy%21%20Joy%21'), '%s, $Happy$ Joy! Joy!');
    assert.strictEqual(uri.solve('%28%25s%29,%20%24Happy%24%20Joy%21%20Joy%21'), '(%s), $Happy$ Joy! Joy!');
    assert.strictEqual(uri.solve('%28%25s%29,%20%24%2aHappy%2a%24%20Joy%21%20Joy%21'), '(%s), $*Happy*$ Joy! Joy!');
    assert.strictEqual(uri.solve('http://algospot.com/%2a'), 'http://algospot.com/*');
    assert.strictEqual(uri.solve('http://algospot.com/%2A'), 'http://algospot.com/*');
    assert.strictEqual(uri.solve('http://algospot.com/%2F%2A'), 'http://algospot.com/%2F*');
    assert.strictEqual(uri.solve('http://algospot.com/%2520%252A'), 'http://algospot.com/%20%2A');
  });
});
