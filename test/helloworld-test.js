const assert = require('assert');
const hello = require('../source/helloworld.js');

describe('HELLOWORLD', function() {
    it('should say hello with a name', function() {
        assert.strictEqual(hello.sayHello('world'), 'Hello, world!');
        assert.strictEqual(hello.sayHello('world    '), 'Hello, world!');
        assert.strictEqual(hello.sayHello('    world    '), 'Hello, world!');
        assert.strictEqual(hello.sayHello('1world    '), 'Hello, 1world!');
    });
});
