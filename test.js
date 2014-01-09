'use strict';
var assert = require('assert');
var tildify = require('./index');

it('should convert path to tilde style', function () {
	process.env.HOME = '/Users/sindresorhus';
	assert.equal(tildify('/Users/sindresorhus/dev/tildify'), '~/dev/tildify');
});
