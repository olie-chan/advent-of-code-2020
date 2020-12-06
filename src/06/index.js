const { intersection } = require('lodash');

function groupCountPart1(groupsAnswers) {
  return new Set([...groupsAnswers.replace(/\W/g, '')]).size;
}

function groupCountPart2(groupAnswers) {
  return intersection(
    ...groupAnswers.split('\n')
      .map((s) => [...s]),
  ).length;
}

function getTotalCountOfAnswers(listOfGroupAnswers, cb) {
  return listOfGroupAnswers.reduce(
    (total, currentGroup) => total + cb(currentGroup),
    0,
  );
}

module.exports = {
  groupCountPart1,
  groupCountPart2,
  getTotalCountOfAnswers,
};
