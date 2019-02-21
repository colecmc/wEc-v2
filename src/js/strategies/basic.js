import { validateParamString } from '../error-helpers';
import Strategy from '../strategy';
import { primary } from './primary';

export function basic(client, vendor) {
  if (validateParamString(client) && validateParamString(vendor)) {
    return client
      .concat(vendor)
      .split('')
      .map(item => item.replace(/\W/ig, item.charCodeAt()))
      .sort()
      .reduce((a, b) => a.concat(b), '');
  }

  return false;
}

Strategy.registerStrategy('basic', basic);
