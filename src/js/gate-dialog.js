import { DOC } from './settings';
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

    if (promptField.getAttribute('value') === '1234' || promptField.value === '1234') {
      gateDialog.dataset.valid = 'true';
      gateDialog.parentElement.dataset.gateIsValid = 'true';
      gateDialog.parentElement.removeChild(gateDialog);
      return true;
    }

    gateDialog.parentElement.removeChild(gateDialog);
    gateDialog.dataset.valid = 'false';
    return false;
  },
};

Object.assign(gateForm.componentData, componentData);
gateForm.onsubmit = gateForm.componentData.submit;
DOC.body.appendChild(gateDialog);
export default gateDialog;
