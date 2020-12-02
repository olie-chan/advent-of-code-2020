//passwordInfo = min-max character: password
const parsePasswordInfo = (passwordInfo) => {
  const [_, a, b, ...rest] = passwordInfo.match(/(\d+)-(\d+) (\w+)\: (\w+)/);
  return [Number(a), Number(b), ...rest];
};

const getValidPasswordsPart1 = (listOfPasswords) =>
  listOfPasswords.reduce((count, passwordInfo) => {
    const [min, max, character, password] = parsePasswordInfo(passwordInfo);

    const matches = password.match(new RegExp(character, "g"));

    if (matches && matches.length >= min && matches.length <= max) {
      return ++count;
    }

    return count;
  }, 0);

const getValidPasswordsPart2 = (listOfPasswords) =>
  listOfPasswords.reduce((count, passwordInfo) => {
    const [firstPos, secondPos, character, password] = parsePasswordInfo(
      passwordInfo
    );

    if (
      password.charAt(firstPos - 1) === character ^
      password.charAt(secondPos - 1) === character
    ) {
      return ++count;
    }

    return count;
  }, 0);

module.exports = {
  getValidPasswordsPart1,
  getValidPasswordsPart2,
};
