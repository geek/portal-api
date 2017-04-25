'use strict';

const Pack = require('../package.json');
const Routes = require('./routes');


module.exports = function (plugin, options, next) {
  plugin.route(Routes);
  next();
};

module.exports.attributes = {
  name: Pack.name,
  version: Pack.version,
  once: true,
  multiple: false
};
