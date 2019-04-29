'use strict';
const path = require('path');
const os = require('os');
const test = require('ava');
const tildify = require('.');

const home = os.homedir();

test('tildify home', t => {
	const fixture = home;
	t.is(tildify(fixture), '~');
});

test('tildify path', t => {
	const fixture = path.resolve(home, 'tildify');
	t.is(tildify(fixture)[0], '~');
	t.true(tildify(fixture).endsWith('tildify'));
	t.not(tildify(fixture), fixture);
});

test('ensure only a fully matching path is replaced', t => {
	const fixture = path.resolve(`${home}foo`, 'tildify');
	t.is(tildify(fixture), fixture);
});

test('ignore relative paths', t => {
	const fixture = 'tildify';
	t.is(tildify(fixture), fixture);
});

test('only tildify when home is at the start of a path', t => {
	const fixture = path.join('tildify', home);
	t.is(tildify(fixture), fixture);
});
