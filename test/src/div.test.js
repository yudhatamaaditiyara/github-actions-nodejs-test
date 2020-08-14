const div = require('../../src/div');

describe('div()', () => {
  test('[1,2] must be 2', () => {
    expect(div([1,2])).toBe(0.5);
  });
  test('Math.floor -> [1,2,3,4] must be 0', () => {
    expect(~~div([1,2,3,4])).toBe(0);
  });
});