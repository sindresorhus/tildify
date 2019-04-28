'use strict';
const path = require('path');
const os = require('os');

const home = os.homedir();

module.exports = string => {
	string = path.normalize(string) + path.sep;
	return (string.indexOf(home) === 0 ? string.replace(home + path.sep, `~${path.sep}`) : string).slice(0, -1);
};
