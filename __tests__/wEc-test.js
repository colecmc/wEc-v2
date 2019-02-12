import div from '../src/js/wEc';
import gateDialog from "../src/js/gate-dialog";

describe('wEc-v2', () => {

  test('wEc-v2 should have 2 children', () => {
    expect(div.children.length).toBe(2);
  });

  test('wEc-v2 should update child `secureDialog` when it receives dataset `gateIsValid="true"`', () => {
    const secureDialog = div.querySelector('#secureContainer');
    const promptInput = div.querySelector('#promptField');
    const gateForm = gateDialog.querySelector('#gateForm');

    promptInput.setAttribute('value', '1234');
    gateForm.componentData.submit(); // very good. Gate dialog should be gone from document now.
    expect(div.classList.contains('remove-hidden')).toBeTruthy();
//    expect(secureDialog.getAttribute('hidden')).toBe(null);
  });
});
