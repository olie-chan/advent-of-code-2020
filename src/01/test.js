const { getPairFor, getTripletFor, getProduct } = require('.');
const nums = require('./data');


describe('getPair', () => {
  it('returns the pair for 2020', () => {
    expect(getPairFor(2020, nums)).toStrictEqual([246, 1774]);
  });
});

describe('getTripletFor', () => {
  it('returns the triplet for 2020', () => {
    expect(getTripletFor(2020, nums)).toStrictEqual([721, 448, 851]);
  });
});

describe('getProduct', () => {
  it('returns the product for a list of nums', () => {
    expect(getProduct([1,2,3,4])).toBe(24)
    expect(getProduct(getPairFor(2020, nums))).toBe(436404)
    expect(getProduct(getTripletFor(2020, nums))).toBe(274879808)

  });
});
