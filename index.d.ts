/**
Convert an absolute path to a tilde path: `/Users/sindresorhus/dev` → `~/dev`.

@example
```
import tildify = require('tildify');

tildify('/Users/sindresorhus/dev');
//=> '~/dev'
```
*/
declare function tildify(string: string): string;

export = tildify;
