const parsePasswordInfo = (passwordInfo) => {
  const [minMax, character, password] = passwordInfo.split(' ');
  const [min, max] = minMax.split('-').map(Number);

  return {
    min,
    max,
    character: character[0],
    password,
  };
}
//passwordInfo = min_max character: password
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
