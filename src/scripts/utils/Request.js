'use strict';

var request = require('superagent');
var Env = require('../constants/Env.compiled.js');
var prefix = require('superagent-prefix')(Env.API_HOST);

module.exports = {
	get: function (path) {
		return request.get(path).use(prefix);
	}
};
