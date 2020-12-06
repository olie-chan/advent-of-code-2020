const fs = require('fs');
const path = require('path');
const { groupCountPart1, getTotalCountOfAnswers, groupCountPart2 } = require('.');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')
  .trim()
  .split(/\s{2,}/g);

describe('groupCountPart1', () => {
  it('returns the unique answers count for the group', () => {
    expect(groupCountPart1('a\nab\nabc')).toBe(3);
  });
});

describe('getTotalCountOfAnswers part 1', () => {
  it('returns the total count of answers for all the groups', () => {
    expect(getTotalCountOfAnswers(data, groupCountPart1)).toBe(6686);
  });
});

describe('groupCountPart2', () => {
  it('returnns the count of answers which everyone answered yes to', () => {
    expect(groupCountPart2('a\nab\nabc')).toBe(1);
  });
});

describe('getTotalCountOfAnswers part 2', () => {
  it('returns the total count of answers for all the groups', () => {
    // expect(getTotalCountOfAnswers(data, groupCountPart2)).toBe(3476);
  });
});
