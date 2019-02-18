import {
  textInputFactory, buttonFactory, formFactory, dialogFactory,
} from '../src/js/factories';

describe('factories', () => {
  test('textInputFactory should create a text input field with a semantic html label as it\'s parent.', () => {
    const input = textInputFactory('my-text-field');

    expect(input.tagName).toBe('LABEL');
    expect(input.firstElementChild.type).toBe('text');
    expect(input.firstElementChild.id).toBe('myTextField');
    expect(input.firstElementChild.name).toBe('input_myTextField');
    expect(input.getAttribute('for')).toBe('myTextField');
  });

  test('buttonFactory should create a button element.', () => {
    const button = buttonFactory('my-button');

    expect(button.type).toBe('submit');
    expect(button.id).toBe('myButton');
    expect(button.tagName).toBe('BUTTON');
    expect(button.classList.contains('button-my-button')).toBeTruthy();
  });

  test('formFactory should create a form element.', () => {
    const form = formFactory('my-form', ['Just some text for now']);

    expect(form.id).toBe('myForm');
    expect(form.tagName).toBe('FORM');
    expect(form.name).toBe('my-form');
    expect(form.classList.contains('form-my-form')).toBeTruthy();
  });

  test('dialogFactory should create a dialog element.', () => {
    const dialog = dialogFactory('my-dialog', ['just a string for now.']);

    expect(dialog.open).toBeTruthy();
    expect(dialog.id).toBe('myDialog');
    expect(dialog.tagName).toBe('DIALOG');
    expect(dialog.classList.contains('dialog-my-dialog')).toBeTruthy();
  });
});
