import {expectType} from 'tsd';
import tildify = require('.');

expectType<string>(tildify('/Users/sindresorhus/dev'));
