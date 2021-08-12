import path from 'node:path';
import os from 'node:os';
import test from 'ava';
import tildify from './index.js';

const homeDirectory = os.homedir();

test('tildify home', t => {
	const fixture = homeDirectory;
	t.is(tildify(fixture), '~');
});

test('tildify path', t => {
	const fixture = path.resolve(homeDirectory, 'tildify');
	t.is(tildify(fixture)[0], '~');
	t.true(tildify(fixture).endsWith('tildify'));
	t.not(tildify(fixture), fixture);
});

test('ensure only a fully matching path is replaced', t => {
	const fixture = path.resolve(`${homeDirectory}foo`, 'tildify');
	t.is(tildify(fixture), fixture);
});

test('ignore relative paths', t => {
	const fixture = 'tildify';
	t.is(tildify(fixture), fixture);
});

test('only tildify when home is at the start of a path', t => {
	const fixture = path.join('tildify', homeDirectory);
	t.is(tildify(fixture), fixture);
});
