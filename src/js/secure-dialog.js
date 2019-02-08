import { DOC, nameSpace } from './settings';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from './factories';

import Strategy from './strategy';

const user = textInputFactory('client-address', 'email');

const authType = textInputFactory('authentication-type');

const submitButton = buttonFactory('authorize');

const secureForm = formFactory('authentication-controller', [user, authType, submitButton]);

const secureDialog = dialogFactory('secure-container', [secureForm]);

export function secure() {
  DOC.body.appendChild(secureDialog);

  return {
    submit(field) {
      if (field.id === 'clientAddress') {
        return Strategy.basic('tonystark@stark.iron', 'https://www.stark.iron');
      }
      return true;
    },
  };
}
