function groupCountPart1(groupsAnswers) {
  return new Set([...groupsAnswers.replace(/\W/g, '')]).size;
}

function groupCountPart2(groupAnswers) {
  const [firstAnswer, ...others] = groupAnswers.split('\n');

  if (!others.length) {
    return firstAnswer.length;
  }

  let result = 0;
  for (const char of firstAnswer) {
    if (others.reduce((includesChar, answers) => includesChar && answers.includes(char), true)) {
      result++;
    }
  }

  return result;
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
