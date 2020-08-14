const add = require('../../src/add');

describe('add()', () => {
  test('[1,2] must be 3', () => {
    expect(add([1,2])).toBe(3);
  });
  test('[1,2,3,4] must be 10', () => {
    expect(add([1,2,3,4])).toBe(10);
  });
});