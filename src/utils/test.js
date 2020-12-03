const { getProduct } = require('.');

describe('getProduct', () => {
  it('returns the product for a list of nums', () => {
    expect(getProduct([1, 2, 3, 4])).toBe(24);
  });
});
