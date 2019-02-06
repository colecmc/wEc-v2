import { camelCase, startCase } from 'lodash/string';
import createDOM from './createDOM';
import { nameSpace } from './settings';

export function textInputFactory(kebabId, type = 'text') {
  const id = camelCase(kebabId);

  return createDOM({
    element: 'label',
    attr: { for: id },
    children: [
      startCase(kebabId),
      createDOM({
        element: 'input',
        attr: {
          type,
          value: '',
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
      class: `${nameSpace}-form form-${kebabId}`,
    },
    children,
  });
}

export function dialogFactory(kebabId, children) {
  return createDOM({
    element: 'dialog',
    attr: {
      open: 'open',
      id: camelCase(kebabId),
      class: `${nameSpace}-dialog dialog-${kebabId}`,
    },
    children,
  });
}

export function buttonFactory(kebabId) {
  return createDOM({
    element: 'button',
    attr: {
      type: 'submit',
      id: camelCase(kebabId),
      class: `${nameSpace}-button button-${kebabId}`,
    },
    children: [startCase(kebabId)],
  });
}

export function optionFactory(val) {
  return createDOM({
    element: 'option',
    attr: { value: val },
    children: [startCase(val)],
  });
}
