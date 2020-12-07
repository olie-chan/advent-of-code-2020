const fs = require('fs');
const path = require('path');
const {
  parseRule, parseAndMergeRules, part1, part2,
} = require('.');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')
  .trim()
  .split('\n');

describe('parseRule', () => {
  it('returns the descriptive rule parsed as some data structure', () => {
    expect(parseRule('light red bags contain 1 bright white bag, 2 muted yellow bags.')).toStrictEqual({
      'light red': {
        'bright white': {
          quantity: 1,
        },
        'muted yellow': {
          quantity: 2,
        },
      },
    });
    expect(parseRule('dull purple bags contain 1 striped fuchsia bag.')).toStrictEqual({
      'dull purple': {
        'striped fuchsia': {
          quantity: 1,
        },
      },
    });
    expect(parseRule('faded blue bags contain no other bags.')).toStrictEqual({
      'faded blue': null,
    });
  });
});

describe('parseAndMergeRules', () => {
  it('merges rules when passed an array of rules', () => {
    expect(parseAndMergeRules([
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'bright white bags contain 3 blue speccled bags.',
    ])).toStrictEqual({
      'light red': {
        'bright white': {
          quantity: 1,
        },
        'muted yellow': {
          quantity: 2,
        },
      },
      'bright white': {
        'blue speccled': {
          quantity: 3,
        },
      },
    });
  });
});

describe('part1', () => {
  it('returns the count of shiny gold bags', () => {
    expect(part1([
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ])).toBe(4);
    expect(part1(data)).toBe(274);
  });
});

describe('part2', () => {
  it('returns the count of all the internal bags of shiny gold', () => {
    expect(part2([
      'shiny gold bags contain 2 dark red bags.',
      'dark red bags contain 2 dark orange bags.',
      'dark orange bags contain 2 dark yellow bags.',
      'dark yellow bags contain 2 dark green bags.',
      'dark green bags contain 2 dark blue bags.',
      'dark blue bags contain 2 dark violet bags.',
      'dark violet bags contain no other bags.',
    ])).toBe(126);
  });
});
