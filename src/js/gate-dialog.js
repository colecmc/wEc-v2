import { DOC } from './settings';
import equation from './utils/equation';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from './factories';

const promptInput = textInputFactory('prompt-field');

const submitPrompt = buttonFactory('prompt-secret');

const gateForm = formFactory('gate-form', [promptInput, submitPrompt]);

const gateDialog = dialogFactory('gate-dialog', [gateForm]);

const componentData = {
  submit: function submit() {
    const promptField = gateDialog.querySelector('#promptField');

    if (Number(promptField.getAttribute('value')) === equation() || Number(promptField.value) === equation()) {
      gateDialog.dataset.valid = 'true';
      gateDialog.parentElement.dataset.gateIsValid = 'true';
      gateDialog.parentElement.removeChild(gateDialog);
      return true;
    }

    gateDialog.dataset.valid = 'false';
    gateDialog.parentElement.removeChild(gateDialog);
    return false;
  },
};

Object.assign(gateForm.componentData, componentData);
gateForm.onsubmit = gateForm.componentData.submit;
DOC.body.appendChild(gateDialog);
export default gateDialog;
