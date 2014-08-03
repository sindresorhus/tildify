'use strict';
var test = require('ava');
var tildify = require('./');

test(function (t) {
	process.env.HOME = '/Users/sindresorhus';
	t.assert(tildify('/Users/sindresorhus/dev/tildify') === '~/dev/tildify');
});
