/**
Convert an absolute path to a tilde path: `/Users/sindresorhus/dev` → `~/dev`.

@example
```
import tildify from 'tildify';

tildify('/Users/sindresorhus/dev');
//=> '~/dev'
```
*/
export default function tildify(absolutePath: string): string;
