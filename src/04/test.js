const fs = require('fs');
const path = require('path');
const { getIsValidPassportPart1, getNumberOfValidPassportsPart1, getNumberOfValidPassportsPart2 } = require('.');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')
  .split(/$[\s]{2,}/gm);

describe('getIsValidPassport', () => {
  it('returns true for a Passport meeting all criteria', () => {
    expect(
      getIsValidPassportPart1(`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm`),
    ).toBe(true);
  });
});

describe('getNumberOfValidPassportsPart1', () => {
  it('returns the number of valid passports', () => {
    expect(getNumberOfValidPassportsPart1(data)).toBe(202);
  });
});

describe('getNumberOfValidPassportsPart2', () => {
  it('returns the number of valid passports', () => {
    expect(getNumberOfValidPassportsPart2(data)).toBe(137);
  });
});
