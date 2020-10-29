# tildify [![Build Status](https://travis-ci.com/sindresorhus/tildify.svg?branch=master)](https://travis-ci.com/github/sindresorhus/tildify)

> Convert an absolute path to a tilde path: `/Users/sindresorhus/dev` → `~/dev`

## Install

```
$ npm install tildify
```

## Usage

```js
const tildify = require('tildify');

tildify('/Users/sindresorhus/dev');
//=> '~/dev'
```

## Related

See [untildify](https://github.com/sindresorhus/untildify) for the inverse.
