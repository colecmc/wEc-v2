import { validateParamString } from '../error-helpers';
import { seperator } from '../settings';
import Strategy from '../strategy';

const capLast = str => str.slice(0, str.length - 1) + str.charAt(str.length - 1).toUpperCase();
function getNumByString(str) {
  const id = [];

  str.split('').forEach(letter => id.push(letter.charCodeAt(0)));
  return id.toString().replace(/[,01]/gi, '');
}

function forceQuarter(key) {
  let gem;
  if (key.length < 4) {
    gem = key.concat(key.slice(key.length - 1));
    return forceQuarter(gem);
  }
  return gem;
}

export function methodist(client, vendor, type) {
  const entity = seperator(type);
  if (validateParamString(client) && validateParamString(vendor)) {
    const hostChars = vendor
      .slice(vendor.indexOf('.') + 1, vendor.lastIndexOf('.'))
      .slice(0, 4)
      .split('') /* turn str to an array */
      .reverse()
      .reduce((a, b) => a.concat(b), ''); /* turn array back to str */
    const hostKey = forceQuarter(hostChars);
    const clientKey = client
      .slice(0, client.indexOf('@'))
      .slice(0, 4);

    return capLast(hostKey) + entity + getNumByString(hostKey) + entity + clientKey;
  }

  return false;
}

Strategy.registerStrategy(methodist);
