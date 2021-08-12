# tildify

> Convert an absolute path to a tilde path: `/Users/sindresorhus/dev` → `~/dev`

## Install

```
$ npm install tildify
```

## Usage

```js
import tildify from 'tildify';

tildify('/Users/sindresorhus/dev');
//=> '~/dev'
```

## Related

See [untildify](https://github.com/sindresorhus/untildify) for the inverse.
