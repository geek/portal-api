'use strict';

const Handlers = require('./handlers');
const Models = require('./models');

module.exports = [
  {
    path: '/deployment',
    method: 'post',
    config: {
      tags: ['api', 'deployment'],
      description: 'create new deployment group',
      validate: {
        payload: Models.deploymentCreate
      },
      response: {
        schema: Models.deployment
      },
      handler: Handlers.deploymentCreate,
      plugins: {
        'hapi-swagger': {
          responses: {
            '201': {
              description: 'deployment group created',
              schema: Models.deployment
            }
          }
        }
      }
    }
  },
  {
    path: '/deployment/{deploymentId}',
    method: 'get',
    config: {
      tags: ['api', 'deployment'],
      description: 'retrieve a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        }
      },
      response: {
        schema: Models.deployment
      },
      handler: Handlers.deploymentGet
    }
  },
  {
    path: '/deployment/{deploymentId}',
    method: 'put',
    config: {
      tags: ['api', 'deployment'],
      description: 'update a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        },
        payload: Models.deploymentUpdate
      },
      response: {
        schema: Models.deployment
      },
      handler: Handlers.deploymentUpdate
    }
  },
  {
    path: '/deployment/{deploymentId}',
    method: 'delete',
    config: {
      tags: ['api', 'deployment'],
      description: 'delete a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        }
      },
      handler: Handlers.deploymentDelete
    }
  },
  {
    path: '/deployments',
    method: 'get',
    config: {
      tags: ['api', 'deployment'],
      description: 'retrieve a list of deployment groups',
      response: {
        schema: Models.deployments
      },
      handler: Handlers.deploymentsGet
    }
  },
  {
    path: '/datacenters',
    method: 'get',
    config: {
      tags: ['api', 'datacenter'],
      description: 'retrieve a list of available datacenters',
      response: {
        schema: Models.datacenters
      },
      handler: Handlers.datacentersGet
    }
  },
  {
    path: '/deployment/{deploymentId}/manifest',
    method: 'post',
    config: {
      tags: ['api', 'deployment', 'manifest'],
      description: 'create a new manifest revision for a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        },
        payload: Models.manifestCreate
      },
      response: {
        schema: Models.manifest
      },
      handler: Handlers.manifestCreate,
      plugins: {
        'hapi-swagger': {
          responses: {
            '201': {
              description: 'manifest revision created',
              schema: Models.manifest
            }
          }
        }
      }
    }
  },
  {
    path: '/deployment/{deploymentId}/manifest/{revision}',
    method: 'get',
    config: {
      tags: ['api', 'deployment', 'manifest'],
      description: 'retrieve a manifest revision for a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId,
          revision: Models.manifestRevision
        }
      },
      response: {
        schema: Models.manifest
      },
      handler: Handlers.manifestGet
    }
  },
  {
    path: '/deployment/{deploymentId}/activity',
    method: 'get',
    config: {
      tags: ['api', 'deployment', 'activity'],
      description: 'retrieve the recent activity for a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        }
      },
      response: {
        schema: Models.activities
      },
      handler: Handlers.activitiesGet
    }
  },
  {
    path: '/deployment/{deploymentId}/state',
    method: 'get',
    config: {
      tags: ['api', 'deployment', 'state'],
      description: 'retrieve the current state of the deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        }
      },
      response: {
        schema: Models.state
      },
      handler: Handlers.stateGet
    }
  },
  {
    path: '/deployment/{deploymentId}/state',
    method: 'put',
    config: {
      tags: ['api', 'deployment', 'state'],
      description: 'perform an action on the deployment group state',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        },
        payload: Models.stateAction
      },
      response: {
        schema: Models.state
      },
      handler: Handlers.stateUpdate
    }
  },
  {
    path: '/deployment/{deploymentId}/services',
    method: 'get',
    config: {
      tags: ['api', 'deployment', 'service'],
      description: 'retrieve the services for a deployment group',
      validate: {
        params: {
          deploymentId: Models.deploymentId
        }
      },
      response: {
        schema: Models.services
      },
      handler: Handlers.servicesGet
    }
  },
  {
    path: '/deployment/{deploymentId}/service/{name}',
    method: 'put',
    config: {
      tags: ['api', 'deployment', 'service'],
      description: 'perform an action on the named service',
      validate: {
        params: {
          deploymentId: Models.deploymentId,
          name: Models.serviceName
        },
        payload: Models.serviceUpdate
      },
      response: {
        schema: Models.service
      },
      handler: Handlers.serviceUpdate
    }
  }
];
