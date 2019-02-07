import { validateParamString } from '../error-helpers';
import { seperator } from '../settings';

export function essential(client, vendor, type) {
  const entity = seperator(type);

  if (validateParamString(client) && validateParamString(vendor)) {
    return client
      .concat(vendor)
      .split('')
      .filter((item, index, self) => self.indexOf(item) === index)
      .map(item => item.replace(/\W/ig, item.charCodeAt()))
      .sort()
      .reduce((a, b) => a.concat(b), '')
      .replace(/(\d)+/g, `$&${entity}`);
  }
}
