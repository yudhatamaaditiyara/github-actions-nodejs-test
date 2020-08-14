const sub = require('../../src/sub');

describe('sub()', () => {
  test('[1,2] must be -1', () => {
    expect(sub([1,2])).toBe(-1);
  });
  test('[1,2,3,4] must be -8', () => {
    expect(sub([1,2,3,4])).toBe(-8);
  });
});