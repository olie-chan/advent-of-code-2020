const _ = require('lodash');

function parseRule(rule) {
  const parentBag = (rule.match(/(\w+ \w+) bags contain/))[1];
  const endBag = /contain no other bags/.test(rule);

  if (endBag) {
    return {
      [parentBag]: null,
    };
  }

  return {
    [parentBag]: rule.replace(/([\w\s]+contain\s|\s*bags?|\.)/g, '')
      .split(/, /g)
      .reduce((result, s) => {
        const [, digits, bag] = s.match(/(\d+) (\w+ \w+)/);

        return {
          ...result,
          [bag]: {
            quantity: Number(digits),
          },
        };
      }, {}),
  };
}

function parseAndMergeRules(rules) {
  return rules.reduce((result, rule) => _.merge(result, parseRule(rule)), {});
}

function findParentBags(allBags, search) {
  const matched = [];
  for (const key in allBags) {
    if (allBags[key]) {
      for (const s of search) {
        if (allBags[key][s]) {
          matched.push(key);
          break;
        }
      }
    }
  }

  return matched.length ? matched.concat(findParentBags(allBags, matched)) : [];
}

function findChildBags(allBags, search) {
  const matched = [];
  for (const s of search) {
    for (const key in allBags[s]) {
      const nextLevel = findChildBags(allBags, Object.keys(allBags[s]));
      matched.push(allBags[s][key].quantity * nextLevel);
      console.log({ key, search, matched });
    }
  }
  console.log({ matched });
  return matched.length ? matched.reduce((total, curr) => total + curr, 0) : 1;
}

function part1(rules) {
  const parsed = parseAndMergeRules(rules);
  return new Set(findParentBags(parsed, ['shiny gold'])).size;
}

function part2(allBags) {
  const parsed = parseAndMergeRules(allBags);
  return findChildBags(parsed, ['shiny gold']);
}

module.exports = {
  parseRule,
  parseAndMergeRules,
  part1,
  part2,
};
