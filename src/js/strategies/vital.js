import { validateParamString } from '../error-helpers';
import seperator from '../utils/seprator';
import capLast from '../utils/cap-last';
import getNumByString from '../utils/get-num-by-string';
import forceQuarter from '../utils/force-quarter';
import splitBack from '../utils/split-back';
import capFirst from '../utils/cap-first';
import Strategy from '../strategy';

export function vital(client, vendor, type) {
  const entity = seperator(type);
  if (validateParamString(client) && validateParamString(vendor)) {
    const thirdParty = vendor.indexOf('.') === vendor.lastIndexOf('.') ? 'colesquad.'.concat(vendor) : vendor;
    const hostChars = splitBack(thirdParty.slice(thirdParty.indexOf('.') + 1, thirdParty.lastIndexOf('.')).slice(0, 4));
    const hostKey = forceQuarter(hostChars);
    const clientKey = client
      .slice(0, client.indexOf('@'))
      .slice(0, 4);

    return ''.concat(capLast(hostKey), entity, getNumByString(hostKey), entity, capFirst(clientKey));
  }

  return false;
}

Strategy.registerStrategy('vital', vital);
