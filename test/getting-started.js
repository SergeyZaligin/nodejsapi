'use strict';

const chai = require('chai');
const assert = chai.assert;
const fetch = require('node-fetch');
const co = require('co');
const server = require('../src/hello-server');
const PORT = 3000;

describe('hello world', () => {
  before(done => server.listen(PORT, done));
  after(() => server.close());

  it(
    'Shold respond to requests',
    co.wrap(function*() {
      const response = yield fetch(`http://localhost:${PORT}/`);
      assert(response.ok, 'hello world response');
      const text = yield response.text();
      assert(text === 'Hello World\n');
    })
  );
});
