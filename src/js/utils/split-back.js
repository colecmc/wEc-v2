/**
 * turn str to an array
 * turn array back to str
 */

const splitBack = expression => expression
  .split('')
  .reverse()
  .reduce((a, b) => a.concat(b), '');

export default splitBack;
