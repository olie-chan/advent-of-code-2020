const fs = require('fs');
const path = require('path');
const {
  getCharAtPositionX,
  getNumberOfHitTreesForSlope,
  getNumberOfHitTreesForEachSlope,
} = require('.');

const data = fs
  .readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')
  .trimEnd()
  .split('\n');

describe('getCharAtPositionX', () => {
  it('returns the first character of the line for the 0th position', () => {
    expect(getCharAtPositionX(0, '0')).toBe('0');
  });
  it('wraps if the x position is out of bounds for the line', () => {
    expect(getCharAtPositionX(10, '012345678')).toBe('1');
  });
});

describe('getNumberOfHitTreesForSlope', () => {
  it('returns the number of trees that were hit', () => {
    expect(getNumberOfHitTreesForSlope(3, 1, data)).toBe(242);
  });
});

const rangeOfSlopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
describe('getNumberOfHitTreesForEachSlope', () => {
  it('returns the total number of trees that were hit for a range of slopes', () => {
    const actual = getNumberOfHitTreesForEachSlope(rangeOfSlopes, data);
    const expected = [82, 242, 71, 67, 24];
    expect(actual).toStrictEqual(expected);
  });
});
