const fs = require('fs');
const path = require('path');
const {
  getValueFromBinarySpacing, getRowAndCol, getIdFromRowAndCol, getLargestIdFromBoardings, findMyId,
} = require('.');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')
  .trimEnd()
  .split('\n');

describe('getValueFromBinarySpacing', () => {
  it('returns the value from using binary spacing', () => {
    expect(getValueFromBinarySpacing({
      value: 'FBFBBFF',
      upper: 'B',
    })).toBe(44);
  });
});

describe('getRowAndCol', () => {
  it('returns the row and column from a string', () => {
    expect(getRowAndCol('FBFBBFFRLR')).toStrictEqual([44, 5]);
  });
});

describe('getIdFromRowAndCol', () => {
  it('returns the id generated from the row and column', () => {
    expect(getIdFromRowAndCol([44, 5])).toBe(357);
  });
});

describe('getLargestIdFromBoardings', () => {
  it('returns the largest id from a list of boardings', () => {
    expect(getLargestIdFromBoardings(data)).toBe(987);
  });
});

describe('findMyId', () => {
  it('returns my id from the challenge', () => {
    expect(findMyId(data)).toBe(603);
  });
});
