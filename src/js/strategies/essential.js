import { validateParamString } from '../error-helpers';
import seperator from '../utils/seprator';
import Strategy from '../strategy';

export function essential(client, vendor, type) {
  const entity = seperator(type);

  if (validateParamString(client) && validateParamString(vendor)) {
    return client
      .concat(vendor)
      .split('')
      .filter((item, index, self) => self.indexOf(item) === index)
      .map(item => item.replace(/\W/ig, item.charCodeAt(0)))
      .sort()
      .reduce((a, b) => a.concat(b), '')
      .replace(/(\d)+/g, `$&${entity}`);
  }

  return false;
}

Strategy.registerStrategy(essential);
