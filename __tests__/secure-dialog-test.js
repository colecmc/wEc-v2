import secureDialog from '../src/js/secure-dialog';

describe('secure', () => {
  test('secure should 2 children.', () => {
    expect(secureDialog.children.length).toBe(2);
  });

  test('secure dialog should have children', () => {
    expect(secureDialog.querySelector('#authenticationController')).toBeTruthy();
    expect(secureDialog.querySelector('#wEc-v2Results')).toBeTruthy();
  });

/*
*     const access = Strategy[selected.value](secureForm.element.input_clientAddress, 'http://www.someurl.web', secureForm.element.authenticationType.value);
    const result = secureDialog.querySelector(`#${nameSpace}Results`);

    result.appendChild(document.createTextNode(access));
    return access;
* */

  test('secureForm.submit should invoke a strategy', () => {
    const secureForm = secureDialog.querySelector('#authenticationController');
    const user = secureForm.querySelector('#clientAddress');
    const authType = secureForm.querySelector('#authenticationType');
    const select = secureForm.querySelector('#wEc-v2Strategies');
    const results = secureDialog.querySelector('#wEc-v2Results');

    user.setAttribute('value', 'ironman@stark.in');
    authType.setAttribute('value', 'undefined');
    select.selectedIndex = 1;
    secureForm.componentData.submit();

    expect(results.textContent).toBe('46475864abehiklmnoprstuw');
  });
});
