'use strict';

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const PortalApi = require('../');


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('hapi integration', () => {
  it('can be registered', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();
      done();
    });
  });
});
