import {expectType} from 'tsd';
import tildify from './index.js';

expectType<string>(tildify('/Users/sindresorhus/dev'));
