import { validateParamString } from '../error-helpers';
import { seperator } from '../settings';
import Strategy from '../strategy';

function compare(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

export function sharp(client, vendor, type) {
  const entity = seperator(type);
  if (validateParamString(client) && validateParamString(vendor)) {
    return client
      .concat(vendor)
      .split('')
      .sort(compare)
      .filter((item, index, self) => self.indexOf(item) === index)
      .map(item => item.replace(/\W/ig, item.charCodeAt()))
      .reduce((a, b) => a.concat(b), '')
      .replace(/\S{1,4}(?=(\D{3})+(?!\D))/g, a => entity + a.charAt(0).toUpperCase() + a.slice(1));
  }

  return false;
}

Strategy.registerStrategy(sharp);
