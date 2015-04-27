'use strict';

var API_HOST = 'http://localhost:3000';

var request = require('superagent');
var prefix = require('superagent-prefix')(API_HOST);

module.exports = {
	get: function (path) {
		return request.get(path).use(prefix);
	}
};
