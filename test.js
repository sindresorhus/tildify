'use strict';
const path = require('path');
const test = require('ava');
const osHomedir = require('os-homedir');
const m = require('./');
const home = osHomedir();

test('tildify home', t => {
	const fixture = home;
	t.is(m(fixture), '~');
});

test('tildify path', t => {
	const fixture = path.resolve(home, 'tildify');
	t.is(m(fixture)[0], '~');
	t.true(/tildify$/.test(m(fixture)));
	t.not(m(fixture), fixture);
});

test('ensure only a fully matching path is replaced', t => {
	const fixture = path.resolve(`${home}foo`, 'tildify');
	t.is(m(fixture), fixture);
});

test('ignore relative paths', t => {
	const fixture = 'tildify';
	t.is(m(fixture), fixture);
});

test('only tildify when home is at the start of a path', t => {
	const fixture = path.join('tildify', home);
	t.is(m(fixture), fixture);
});
