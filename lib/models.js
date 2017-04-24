'use strict';

const Joi = require('joi');


// Activity

exports.activity = Joi.object({
  date: Joi.date().required().description('Date/time when the activity occurred'),
  type: Joi.string().required().description('The type of activity that occurred'),
  meta: Joi.object().optional().description('Any metadata related to the activity')
});

exports.activities = Joi.array().items(exports.activity);


// Datacenters

exports.datacenter = Joi.object({
  name: Joi.string().required().description('Name of datacenter'),
  url: Joi.string().required().description('URL of datacenter')
});

exports.datacenters = Joi.array().items(exports.datacenter);


// Manifests

exports.manifestRevision = Joi.number().required().description('Revision number of manifest');

exports.manifestCreate = Joi.object({
  file: Joi.object().required().description('JSON file')
});

exports.manifest = exports.manifestCreate.keys({
  revision: exports.manifestRevision
});


// Deployments

exports.deploymentId = Joi.number().required().description('ID of deployment group');

exports.deploymentCreate = Joi.object({
  name: Joi.string().required().description('Name of deployment group'),
  datacenter: Joi.string().required().description('datacenter the deployment group belongs to')
});

exports.deploymentUpdate = Joi.object({
  name: Joi.string().optional().description('Name of deployment group'),
  datacenter: Joi.string().optional().description('datacenter the deployment group belongs to')
}).or('name', 'datacenter');

exports.deployment = exports.deploymentCreate.keys({
  id: exports.deploymentId
});

exports.deployments = Joi.array().items(exports.deployment);


// Services

exports.serviceName = Joi.string().required().description('Unique name to identify the service');

exports.serviceCount = Joi.number().default(1).description('Number of instances of the service');

exports.service = Joi.object({
  name: exports.serviceName,
  count: exports.serviceCount
});

exports.services = Joi.array().items(exports.service);

exports.serviceUpdate = Joi.object({
  count: exports.serviceCount.required()
});


// State

exports.stateAction = Joi.object({
  action: Joi.string().required().valid([
      'start', 'stop', 'restart'
    ]).description('Action being performed on the deployment group')
});

exports.state = Joi.object({
  current: Joi.string().required().valid([
      'started', 'stopped'
    ]).description('The current state of the deployment group')
});
