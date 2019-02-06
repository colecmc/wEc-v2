import { gate } from '../src/js/gate-dialog';

describe('gate', () => {
  const module = gate();

  test('gate should append a dialog element to the document body.', () => {
    expect(document.getElementById('gateDialog')).toBeTruthy();
  });

  test('gate should open a dialog element prompting input.', () => {
    const prompt = document.getElementById('promptField');

    expect(prompt).toBeTruthy();
  });

  test('The prompt should return false for invalid input. You shall not Paaaasssssss!', () => {
    const prompt = document.getElementById('promptField');

    prompt.setAttribute('value', '5678');
    const invalid = module.submit(prompt);
    expect(invalid).toBeFalsy();
  });

  test('The prompt should return true for a valid input. You may pass go.', () => {
    const prompt = document.getElementById('promptField');

    prompt.setAttribute('value', '1234');
    const valid = module.submit(prompt);
    expect(valid).toBeTruthy();
  });

  test('gate should append another dialog element to the document body and remove the filter dialog.', () => {
    expect(document.getElementById('secureContainer')).toBeTruthy();
    expect(document.getElementById('promptField')).toBeFalsy();
  });
});
