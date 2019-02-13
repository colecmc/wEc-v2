/* Mutation Observer for testing only */
/** import MutationObserver from 'mutation-observer'; **/

import createDOM from './createDOM';
import { DOC, nameSpace } from './settings';
import gateDialog from './gate-dialog';
import secureDialog from './secure-dialog';

/* Add to global for testing only */
/** global.MutationObserver = MutationObserver; **/

function onEachMutation(item) {
  if (item.type === 'attributes' && item.attributeName === 'data-gate-is-valid') {
    item.target.querySelector('#secureContainer').setAttribute('open', 'open');
    DOC.querySelector('#secureContainer').setAttribute('open', 'open');
  }
}

function observerCallback(list) {
  list.forEach(onEachMutation);
}

(function init() {
  const div = createDOM({
    element: 'div',
    attr: {
      id: `${nameSpace}Container`,
      className: `${nameSpace}-container`,
    },
    children: [gateDialog, secureDialog],
  });

  const observer = new MutationObserver(observerCallback);

  DOC.body.appendChild(div);
  observer.observe(div, { attributes: true });
}());
