'use strict';
var path = require('path');
var osHomedir = require('os-homedir');
var home = osHomedir();

module.exports = function (str) {
	str += path.sep;
	str = str.replace(home + path.sep, '~' + path.sep);
	str = str.slice(0, -1);
	return str;
};
