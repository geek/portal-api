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

describe('deployments', () => {
  it('can be created', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();
      const payload = {
        name: 'User Services',
        datacenter: 'us-sw-1'
      };

      server.inject({ method: 'POST', url: '/deployment', payload }, (res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.headers.location).to.exist();
        done();
      });
    });
  });

  it('can be updated', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();
      const payload = {
        name: 'User Services',
        datacenter: 'us-sw-1'
      };

      server.inject({ method: 'PUT', url: '/deployment/42', payload }, (res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('can be retrieved', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();

      server.inject({ method: 'GET', url: '/deployment/42' }, (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result.name).to.equal('User Services');
        done();
      });
    });
  });

  it('can be deleted', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();

      server.inject({ method: 'DELETE', url: '/deployment/42' }, (res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('can all be retrieved', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();

      server.inject({ method: 'GET', url: '/deployments' }, (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result.length).to.equal(1);
        done();
      });
    });
  });
});

describe('datacenters', () => {
  it('can be retrieved', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();

      server.inject({ method: 'GET', url: '/datacenters' }, (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result.length).to.equal(2);
        done();
      });
    });
  });
});


describe('manifests', () => {
  it('can be created', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();
      const payload = {
        file: {}
      };

      server.inject({ method: 'POST', url: '/deployment/42/manifest', payload }, (res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.headers.location).to.exist();
        done();
      });
    });
  });

  it('can be retrieved', (done) => {
    const server = new Hapi.Server();
    server.connection();
    server.register(PortalApi, (err) => {
      expect(err).to.not.exist();

      server.inject({ method: 'GET', url: '/deployment/42/manifest/5' }, (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result.file).to.exist();
        done();
      });
    });
  });
});
