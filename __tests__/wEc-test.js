import wEc from '../src/js/wEc';

describe('wEc', () => {
  const module = wEc();

  test('wEc should append a dialog element to the document body.', () => {
    expect(document.getElementById('filterDialog')).toBeTruthy();
  });

  test('wEc should open a dialog element prompting input.', () => {
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

  test('wEc should append another dialog element to the document body and remove the filter dialog.', () => {
    expect(document.getElementById('wEcV2Dialog')).toBeTruthy();
    expect(document.getElementById('promptField')).toBeFalsy();
  });
});
