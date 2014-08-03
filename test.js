'use strict';
var test = require('ava');
var tildify = require('./');

test(function (t) {
	var fixture = process.cwd();
	t.assert(tildify(fixture)[0] === '~');
	t.assert(/tildify$/.test(tildify(fixture)));
	t.assert(tildify(fixture) !== fixture);
});
