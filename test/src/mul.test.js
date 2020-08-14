const mul = require('../../src/mul');

describe('mul()', () => {
  test('[1,2] must be 2', () => {
    expect(mul([1,2])).toBe(2);
  });
  test('[1,2,3,4] must be 24', () => {
    expect(mul([1,2,3,4])).toBe(24);
  });
});