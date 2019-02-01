import createDOM from './createDOM';

const nameSpace = 'wEc-v2';

const titleCase = id => id
  .split('-')
  .map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
  .reduce((a, b) => a.concat(` ${b}`), '').trim();

const camelCase = (id) => {
  const idList = id.split('-');

  return idList
    .filter((item, index) => index !== 0)
    .map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
    .reduce((a, b) => a.concat(b), idList[0]);
};

function textInputFactory(kebabId) {
  const id = camelCase(kebabId);

  return createDOM({
    element: 'label',
    attr: { for: id },
    children: [
      titleCase(kebabId),
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

function dialogFactory(id, children) {
  return createDOM({
    element: 'dialog',
    attr: {
      id,
      class: `${nameSpace}-container-${id}`,
    },
    children,
  });
}

function buttonFactory(id) {
  return createDOM({
    element: 'button',
    attr: {
      id,
      type: 'submit',
      'class': `${nameSpace}-button button-${id}`,
    },
  });
}

const promptInput = textInputFactory('prompt-field');

const submitPrompt = buttonFactory('promptSecret');

const cancelPrompt = buttonFactory('promptFailed');

const filterDialog = dialogFactory('filter', [promptInput, submitPrompt, cancelPrompt]);

document.body.appendChild(filterDialog);
