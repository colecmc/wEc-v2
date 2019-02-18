import { DOC, nameSpace } from './settings';
import Strategy from './strategy';
import advanced from './strategies/advanced';
import basic from './strategies/basic';
import bare from './strategies/bare';
import brilliant from './strategies/brilliant';
import essential from './strategies/essential';
import methodist from './strategies/methodist';
import primary from './strategies/primary';
import sharp from './strategies/sharp';
import vital from './strategies/vital';
import createDOM from './createDOM';
import {
  textInputFactory, buttonFactory, formFactory, dialogFactory, optionFactory,
} from './factories';
import gateDialog from "./gate-dialog";

const getSelectChildren = list => list.map(item => optionFactory(item));

const user = textInputFactory('client-address', 'email');

const authType = textInputFactory('authentication-type');

const select = createDOM({
  element: 'select',
  attr: {
    id: `${nameSpace}Strategies`,
    name: 'select_strategies',
    class: 'select-strategies',
  },
  children: getSelectChildren(Array.from(Strategy.map.keys())),
});

const submitButton = buttonFactory('authorize');

const textarea = createDOM({
  element: 'textarea',
  attr: {
    class: 'blended-textarea',
    id: `${nameSpace}Textarea`,
  },
});

const secureForm = formFactory('authentication-controller', [user, authType, select, textarea, submitButton]);

const results = createDOM({
  element: 'var',
  attr: {
    id: `${nameSpace}Results`,
    class: `${nameSpace}-results`,
  },
});

const secureDialog = dialogFactory('secure-container', [secureForm, results]);
secureDialog.removeAttribute('open');

function copy(field, callback) {
  field.select();
  try {
    DOC.execCommand('copy');
    callback();
  } catch (error) {
    callback(error.message);
  }
}

const componentData = {
  submit: function submit() {
    const selectEl = secureForm.elements[`${nameSpace}Strategies`];
    const selected = selectEl.options[selectEl.selectedIndex];

    const access = Strategy[selected.value](secureForm.elements.input_clientAddress.value, window.location.host, secureForm.elements.authenticationType.value);
    const field = secureDialog.querySelector(`#${nameSpace}Textarea`);

    field.appendChild(DOC.createTextNode(access));
    copy(field, (err) => {
      const result = secureDialog.querySelector(`#${nameSpace}Results`);

      if (err) {
        result.appendChild(DOC.createTextNode(err));
        return false;
      }

      Object.assign(field, { readOnly: true });
      result.appendChild(DOC.createTextNode('copied OK!\n'));
    });

    secureForm.reset();
    return false;
  },
};

Object.assign(secureForm.componentData, componentData);
secureForm.onsubmit = secureForm.componentData.submit;
DOC.body.appendChild(secureDialog);
export default secureDialog;
