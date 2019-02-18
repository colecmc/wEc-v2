import createDOM from './createDOM';
import { DOC } from './settings';

export function getScript(url, callBack) {
  const attrs = {
    src: null,
    defer: true,
    id: 'js-wEcv2',
    type: 'text/javascript',
  };

  function delegator(event) {
    const promise = new Promise((resolve, reject) => (event.type === 'load' ? resolve(event) : reject(event)));

    if (typeof callBack === 'function') {
      callBack(promise);
    }
  }

  /** look for a string based, protocol agnostic, js file url */
  if (typeof url === 'string' && url.indexOf('http') === 0) {
    attrs.src = url;
  }

  const el = createDOM({
    attr: attrs,
    element: 'script',
  });

  el.addEventListener('load', delegator);
  el.addEventListener('error', delegator);

  DOC.body.appendChild(el);

  return el;
}
