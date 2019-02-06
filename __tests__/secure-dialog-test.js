import { secure } from '../src/js/secure-dialog';

describe('secure', () => {
  const module = secure();

  xtest('secure should append a dialog element to the document body.', () => {
    expect(document.getElementById('filterDialog')).toBeTruthy();
  });

});
