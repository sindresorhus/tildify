'use strict';
var test = require('ava');
var tildify = require('./');
var path = require('path');
var osHomedir = require('os-homedir');
var home = osHomedir();

test(function (t) {
	var fixture = path.resolve(home, 'tildify');
	t.assert(tildify(fixture)[0] === '~');
	t.assert(/tildify$/.test(tildify(fixture)));
	t.assert(tildify(fixture) !== fixture);
	t.end();
});
