const fs = require('fs');
const path = require('path');
const HandheldHalting = require('.');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')
  .trim();

describe('part1', () => {
  it('returns the global acc value', () => {
    expect(HandheldHalting.part1(`nop +0
    acc +1
    jmp +4
    acc +3
    jmp -3
    acc -99
    acc +1
    jmp -4
    acc +6`).value).toBe(5);
  });
  expect(HandheldHalting.part1(data).value).toBe(1766);
});

describe('part2', () => {
  it('returns the acc after completing all the instructions', () => {
    expect(HandheldHalting.part2(`nop +0
    acc +1
    jmp +4
    acc +3
    jmp -3
    acc -99
    acc +1
    jmp -4
    acc +6`)).toBe(8);
    expect(HandheldHalting.part2(data)).toBe(1639);
  });
});
