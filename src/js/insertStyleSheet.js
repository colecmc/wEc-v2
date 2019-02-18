import createDOM from './createDOM';
import { nameSpace, DOC } from './settings';
import { validateParamString } from './error-helpers';

function insertStyleSheet(css) {
  const styleSheet = createDOM({
    element: 'style',
    attr: {
      id: `${nameSpace}CSS`,
      type: 'text/css',
      rel: 'stylesheet',
      media: 'all',
    },
    children: [],
  });

  DOC.head.appendChild(styleSheet);

  const { sheet } = styleSheet;

  if (css && Array.isArray(css)) {
    css.forEach((rule) => {
      if (validateParamString(rule)) {
        sheet.insertRule(rule, 0);
      }
    });
  } else {
    throw new Error('insertStyleSheet Exception: "css" parameter must be an Array');
  }
}

export default insertStyleSheet;
