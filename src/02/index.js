//passwordInfo = min-max character: password
const parsePasswordInfo = (passwordInfo) => {
  const { groups } = passwordInfo.match(/(?<min>\d+)-(?<max>\d+) (?<character>\w+)\: (?<password>\w+)/)

  return {
    min: Number(groups.min),
    max: Number(groups.max),
    character: groups.character,
    password: groups.password,
  };
}
const getValidPasswords = (listOfPasswords) => {
  let result = 0;
  for (const passwordInfo of listOfPasswords) {
    const {
      min,
      max,
      character,
      password,
    } = parsePasswordInfo(passwordInfo);

    const matches = password.match(new RegExp(character, 'g'));

    if (matches &&
        matches.length >= min &&
        matches.length <= max
      ) {
      result++;
    };
  }

  return result;
}


module.exports = {
  getValidPasswords,
};
