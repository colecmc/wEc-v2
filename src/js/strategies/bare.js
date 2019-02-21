import { validateParamString } from '../error-helpers';
import Strategy from '../strategy';
import { primary } from './primary';

export function bare(client, vendor) {
  if (validateParamString(client) && validateParamString(vendor)) {
    return client
      .concat(vendor)
      .split('')
      .filter((item, index, self) => self.indexOf(item) === index)
      .map(item => item.replace(/\W/ig, item.charCodeAt()))
      .sort()
      .reduce((a, b) => a.concat(b), '');
  }

  return false;
}

Strategy.registerStrategy('bare', bare);
