'use strict';
var assert = require('assert');
var tildify = require('./index');

it('should convert path to tilde style', function () {
	assert.equal(tildify('/Users/sindresorhus/dev/tildify'), '~/dev/tildify');
});
