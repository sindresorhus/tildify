'use strict';
var path = require('path');
var home = require('os').homedir();

module.exports = function (str) {
	str = path.normalize(str) + path.sep;
	return (str.indexOf(home) === 0 ? str.replace(home + path.sep, '~' + path.sep) : str).slice(0, -1);
};
