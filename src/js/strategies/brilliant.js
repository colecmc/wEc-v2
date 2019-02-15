import { validateParamString } from '../error-helpers';
import seperator from '../utils/seprator';
import capFirst from '../utils/cap-first';
import getNumByString from '../utils/get-num-by-string';

export function brilliant(client, vendor, type) {
  const entity = seperator(type);
  if (validateParamString(client) && validateParamString(vendor)) {
    const hostKey = vendor.slice(vendor.indexOf('.') + 1, vendor.lastIndexOf('.')).slice(0, 4);
    const clientKey = client
      .slice(0, client.indexOf('@'))
      .slice(0, 4);

    return entity === '_'
      ? ''.concat(capFirst(hostKey), entity, getNumByString(hostKey), entity, capFirst(clientKey))
      : ''.concat(getNumByString(hostKey), entity, capFirst(hostKey), entity, capFirst(clientKey));
  }
}
