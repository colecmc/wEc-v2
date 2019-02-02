import { DOC, nameSpace } from './settings';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from './factories';

const promptInput = textInputFactory('prompt-field');

const submitPrompt = buttonFactory('promptSecret');

const cancelPrompt = buttonFactory('promptFailed');

const filterForm = formFactory('filter-form', [promptInput, submitPrompt, cancelPrompt]);

const filterDialog = dialogFactory('filterDialog', [filterForm]);

function letsEncrypt() {
  // const
  const wEcV2Dialog = dialogFactory(`${nameSpace}Dialog`);
}

export function wEc() {
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
