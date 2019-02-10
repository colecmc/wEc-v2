import gateDialog from '../src/js/gate-dialog';

describe('gate', () => {
  test('gate should append a dialog element to the document body.', () => {
    expect(document.getElementById('gateDialog')).toBeTruthy();
  });

  test('gate should open a dialog element prompting input.', () => {
    const prompt = document.getElementById('promptField');

    expect(prompt).toBeTruthy();
  });

  test('The prompt should add `data-valid="false"` for invalid input. You shall not Paaaasssssss!', () => {
    const promptInput = document.getElementById('promptField');
    const gateForm = gateDialog.querySelector('#gateForm');

    promptInput.setAttribute('value', '5678');
    gateForm.componentData.submit();
    expect(gateDialog.dataset.valid).toBe('false');
  });

  test('The prompt should add `data-valid="true"` for a valid input. You may pass go.', () => {
    const promptInput = document.getElementById('promptField');
    const gateForm = gateDialog.querySelector('#gateForm');

    promptInput.setAttribute('value', '1234');
    gateForm.componentData.submit(); // very good. Gate dialog should be gone from document now.
    expect(gateDialog.dataset.valid).toBe('true');
    expect(document.getElementById('gateDialog')).toBeFalsy();
  });
});
