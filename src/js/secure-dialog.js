import { DOC, nameSpace } from './settings';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from './factories';

const user = textInputFactory('email-address', 'email');

const authType = textInputFactory('authentication-type');

const submitButton = buttonFactory('authorize')

export function secure() {
  DOC.body.appendChild(filterDialog);

  return {
    submit(field) {
      if (field.id === 'promptField') {
        if (field.getAttribute('value') === '1234') {
          return true;
        }
        return false;
      }
      return true;
    },
  };
}

