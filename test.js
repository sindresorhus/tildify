'use strict';
var test = require('ava');
var tildify = require('./');
var path = require('path');
var osHomedir = require('os-homedir');
var home = osHomedir();

test('tildify home', function (t) {
	var fixture = home;
	t.assert(tildify(fixture) === '~');
	t.end();
});

test('tildify path', function (t) {
	var fixture = path.resolve(home, 'tildify');
	t.assert(tildify(fixture)[0] === '~');
	t.assert(/tildify$/.test(tildify(fixture)));
	t.assert(tildify(fixture) !== fixture);
	t.end();
});

test('ensure only a fully matching path is replaced', function (t) {
	var fixture = path.resolve(home + 'foo', 'tildify');
	t.assert(tildify(fixture) === fixture);
	t.end();
});
