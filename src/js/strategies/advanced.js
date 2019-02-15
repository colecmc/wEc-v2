import { validateParamString } from '../error-helpers';
import seperator from '../utils/seprator';
import capLast from '../utils/cap-last';
import getNumByString from '../utils/get-num-by-string';
import forceQuarter from '../utils/force-quarter';
import splitBack from '../utils/split-back';

export function advanced(client, vendor, type) {
  const entity = seperator(type);
  if (validateParamString(client) && validateParamString(vendor)) {
    const hostChars = splitBack(vendor.slice(vendor.indexOf('.') + 1, vendor.lastIndexOf('.')).slice(0, 4));
    const hostKey = forceQuarter(hostChars);
    const clientKey = client
      .slice(0, client.indexOf('@'))
      .slice(0, 4);

    return ''.concat(capLast(hostKey), entity, getNumByString(hostKey), entity, clientKey);
  }
}
