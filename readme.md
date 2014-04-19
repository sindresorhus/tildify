# tildify [![Build Status](https://travis-ci.org/sindresorhus/tildify.svg?branch=master)](https://travis-ci.org/sindresorhus/tildify)

> Convert an absolute path to a tilde path: `/Users/sindresorhus/dev` => `~/dev`

See the [untildify](https://github.com/sindresorhus/untildify) module for the inverse.


## Install

```bash
$ npm install --save tildify
```


## Usage

```js
var tildify = require('tildify');

tildify('/Users/sindresorhus/dev');
//=> ~/dev
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
