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
  },
  children: getSelectChildren(Array.from(Strategy.map.keys())),
});

const submitButton = buttonFactory('authorize');

const secureForm = formFactory('authentication-controller', [user, authType, select, submitButton]);

const results = createDOM({
  element: 'var',
  attr: { id: `${nameSpace}Results` },
});

const secureDialog = dialogFactory('secure-container', [secureForm, results]);

const componentData = {
  submit: function submit() {
    const selectEl = secureForm.elements[`${nameSpace}Strategies`];
    const selected = selectEl.options[selectEl.selectedIndex];

    const access = Strategy[selected.value](secureForm.elements.input_clientAddress.value, 'http://www.someurl.web', secureForm.elements.authenticationType.value);
    const result = secureDialog.querySelector(`#${nameSpace}Results`);

    result.appendChild(document.createTextNode(access));
    return access;
  },
};

Object.assign(secureForm.componentData, componentData);
secureForm.onsubmit = secureForm.componentData.submit;
DOC.body.appendChild(secureDialog);
export default secureDialog;
