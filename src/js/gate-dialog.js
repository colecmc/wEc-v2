import { wEc } from './wEc';
import { DOC } from './settings';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from './factories';

const promptInput = textInputFactory('prompt-field');

const submitPrompt = buttonFactory('promptSecret');

const cancelPrompt = buttonFactory('promptFailed');

const gateForm = formFactory('gate-form', [promptInput, submitPrompt, cancelPrompt]);

const gateDialog = dialogFactory('gateDialog', [gateForm]);

export function gate() {
  DOC.body.appendChild(gateDialog);

  return {
    submit(field) {
      if (field.id === 'promptField') {
        if (field.getAttribute('value') === '1234') {
          wEc();
          return true;
        }
        return false;
      }
      return true;
    },
  };
}
