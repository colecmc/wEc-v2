/**
 * Mutation Observer for testing only
 * import MutationObserver from 'mutation-observer';
 * Add to global for testing only
 * global.MutationObserver = MutationObserver;
 */

import createDOM from './createDOM';
import { DOC, nameSpace } from './settings';
import gateDialog from './gate-dialog';
import secureDialog from './secure-dialog';
import insertStyleSheet from './insertStyleSheet';
import getNextHighestZindex from './utils/get-next-highest-zindex';

const css = [
  `.${nameSpace}-container {
  color: #787878;
  font-size: 18px;
  font-family: arial, sans-serif;
    top: 0;
    z-index: ${getNextHighestZindex()};
    width: 100%;
    position: fixed;
  }`,
  `.${nameSpace}-container .${nameSpace}-dialog {
    width: 200px;
    margin: 0 auto;
    padding: 0.75rem;
    font-size: 0.85em;
    background: #f0f0f0;
    border: solid 1px #ccc;
  }`,
  `.${nameSpace}-container .${nameSpace}-form {
    margin: 0 0 1rem 0;
    padding: 0; }`,
  `.${nameSpace}-container .${nameSpace}-form > label {
      display: block; }`,
  `.${nameSpace}-container .${nameSpace}-form > label > input {
        font-size: 0.091em;
        color: white;
        display: block;
        width: 100%;
        height: 2rem;
        padding: 0.5rem;
        margin: 0.5rem 0; }`,
  `.select-strategies {
      padding: .65rem;
    }`,
  `.${nameSpace}-container .blended-textarea {
      height: 0.091em;
      color: #787878;
      border: 0 none;
      display: block;
      font-size: 0.091em;
      background: #787878;
  }`,
  `.${nameSpace}-container .${nameSpace}-button {
    font-size: 1em;
    padding: 0.5rem;
    margin: 0.15rem 0; }`,
  `.${nameSpace}-container .${nameSpace}-button.button-prompt-secret {
      background: lightgreen; }`,
];

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
      class: `${nameSpace}-container`,
    },
    children: [gateDialog, secureDialog],
  });

  const observer = new MutationObserver(observerCallback);

  DOC.body.appendChild(div);
  insertStyleSheet(css);
  observer.observe(div, { attributes: true });
}());
