// passwordInfo = min-max character: password
const parsePasswordInfo = (passwordInfo) => {
  const [, a, b, ...rest] = passwordInfo.match(/(\d+)-(\d+) (\w+): (\w+)/);
  return [Number(a), Number(b), ...rest];
};

function getValidPasswordsPart1(listOfPasswords) {
  return listOfPasswords.reduce((count, passwordInfo) => {
    const [min, max, character, password] = parsePasswordInfo(passwordInfo);

    const matches = password.match(new RegExp(character, 'g'));

    if (matches && matches.length >= min && matches.length <= max) {
      return count + 1;
    }

    return count;
  }, 0);
}

function getValidPasswordsPart2(listOfPasswords) {
  return listOfPasswords.reduce((count, passwordInfo) => {
    const [firstPos, secondPos, character, password] = parsePasswordInfo(
      passwordInfo,
    );

    if (
      password.charAt(firstPos - 1) === character
      ^ password.charAt(secondPos - 1) === character
    ) {
      return count + 1;
    }

    return count;
  }, 0);
}

module.exports = {
  getValidPasswordsPart1,
  getValidPasswordsPart2,
};
