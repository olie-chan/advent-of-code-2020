const { getValidPasswordsPart1, getValidPasswordsPart2 } = require('.');
const passwords = require('./data');

const basicCase = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc',
];

describe('getValidPasswordsPart1', () => {
  it('returns the number of valid passwords for the first policy', () => {
    expect(getValidPasswordsPart1(basicCase)).toBe(2);
    expect(getValidPasswordsPart1(passwords)).toBe(469);
  });
});

describe('getValidPasswordsPart2', () => {
  it('returns the number of valid passwords for the second policy', () => {
    expect(getValidPasswordsPart2(basicCase)).toBe(1);
    expect(getValidPasswordsPart2(passwords)).toBe(267);
  });
});
