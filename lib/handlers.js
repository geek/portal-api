'use strict';

const Examples = require('./examples');


// Deployments

exports.deploymentCreate = function (request, reply) {
  const deploymentRoute = request.server.lookup('deploymentGet');
  const deployment = Examples.deployment;

  reply(deployment).created(deploymentRoute.path.replace('{deployment}', deployment.id));
};

exports.deploymentGet = function (request, reply) {
  reply(Examples.deployment);
};

exports.deploymentUpdate = function (request, reply) {
  reply(Examples.deployment);
};

exports.deploymentDelete = function (request, reply) {
  reply('');
};

exports.deploymentsGet = function (request, reply) {
  reply(Examples.deployments);
};


// Datacenters

exports.datacentersGet = function (request, reply) {
  reply(Examples.datacenters);
};


// Manifests

exports.manifestCreate = function (request, reply) {
  const manifestRoute = request.server.lookup('manifestGet');
  const manifest = Examples.manifest;
  const deployment = Examples.deployment;

  reply(manifest).created(manifestRoute.path.replace('{deployment}', deployment.id).replace('{revision}', manifest.revision));
};

exports.manifestGet = function (request, reply) {
  reply(Examples.manifest);
};


// Activities and Metrics

exports.activitiesGet = function (request, reply) {
  reply(Examples.activities);
};

exports.metricsGet = function (request, reply) {
  reply(Examples.metrics);
};


// Deployment Group State

exports.stateGet = function (request, reply) {
  reply(Examples.state);
};

exports.stateUpdate = function (request, reply) {
  reply(Examples.state);
};


// Services

exports.servicesGet = function (request, reply) {
  reply(Examples.services);
};

exports.serviceUpdate = function (request, reply) {
  reply(Examples.service);
};
