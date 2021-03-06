import { validateParamString } from '../error-helpers';
import seperator from '../utils/seprator';
import capLast from '../utils/cap-last';
import getNumByString from '../utils/get-num-by-string';
import forceQuarter from '../utils/force-quarter';
import Strategy from '../strategy';
import splitBack from '../utils/split-back';

export function methodist(client, vendor, type) {
  const entity = seperator(type);
  if (validateParamString(client) && validateParamString(vendor)) {
    const thirdParty = vendor.indexOf('.') === vendor.lastIndexOf('.') ? 'colesquad.'.concat(vendor) : vendor;
    const hostChars = splitBack(thirdParty.slice(thirdParty.indexOf('.') + 1, thirdParty.lastIndexOf('.')).slice(0, 4));
    const hostKey = forceQuarter(hostChars);
    const clientKey = client
      .slice(0, client.indexOf('@'))
      .slice(0, 4);

    return entity === '_'
      ? ''.concat(capLast(hostKey), entity, getNumByString(hostKey), entity, clientKey)
      : ''.concat(getNumByString(hostKey), entity, capLast(hostKey), entity, clientKey);
  }

  return false;
}

Strategy.registerStrategy('methodist', methodist);
