const assert = require('assert');
const hello = require('../hello_world/solution.js');

describe('HELLOWORLD', function() {
    it('should say hello with a name', function() {
        assert.equal("Hello, world!", hello.sayHello("world"));
        assert.equal("Hello, world!", hello.sayHello("world    "));
        assert.equal("Hello, world!", hello.sayHello("    world    "));
        assert.equal("Hello, 1world!", hello.sayHello("1world    "));
    })
});