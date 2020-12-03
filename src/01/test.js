const { getPairFor, getTripletFor } = require('.');
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
