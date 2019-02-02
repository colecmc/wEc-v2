import { camelCase, startCase } from 'lodash/string';
import createDOM from './createDOM';
import { nameSpace } from './settings';

export function textInputFactory(kebabId) {
  const id = camelCase(kebabId);

  return createDOM({
    element: 'label',
    attr: { for: id },
    children: [
      startCase(kebabId),
      createDOM({
        element: 'input',
        attr: {
          value: '',
          type: 'text',
          name: `input_${id}`,
          id,
        },
      }),
    ],
  });
}

export function formFactory(kebabId, children) {
  return createDOM({
    element: 'form',
    attr: {
      action: '#',
      name: kebabId,
      autocomplete: false,
      id: camelCase(kebabId),
      class: `${nameSpace}-form ${kebabId}`,
    },
    children,
  });
}

export function dialogFactory(id, children) {
  return createDOM({
    element: 'dialog',
    attr: {
      id,
      open: 'open',
      class: `${nameSpace}-container-${id}`,
    },
    children,
  });
}

export function buttonFactory(id) {
  return createDOM({
    element: 'button',
    attr: {
      id,
      type: 'submit',
      class: `${nameSpace}-button button-${id}`,
    },
  });
}
