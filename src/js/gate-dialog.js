import { secure } from './secure-dialog';
import { DOC } from './settings';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from './factories';

const promptInput = textInputFactory('prompt-field');

const submitPrompt = buttonFactory('prompt-Secret');

const cancelPrompt = buttonFactory('prompt-Failed');

const gateForm = formFactory('gate-form', [promptInput, submitPrompt, cancelPrompt]);

const gateDialog = dialogFactory('gate-Dialog', [gateForm]);

export function gate() {
  DOC.body.appendChild(gateDialog);

  return {
    submit(field) {
      if (field.id === 'promptField') {
        if (field.getAttribute('value') === '1234') {
          gateDialog.parentElement.removeChild(gateDialog);
          secure();
          return true;
        }
        return false;
      }
      return true;
    },
  };
}
