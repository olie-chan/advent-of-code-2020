function getRequirements() {
  const testHgt = (x, min, max) => {
    const digits = x.replace(/\D/g, '');
    return Number(digits) >= min && Number(digits) <= max;
  };
  return {
    byr: (x) => /^\d{4}$/.test(x) && Number(x) >= 1920 && Number(x) <= 2002,
    iyr: (x) => /^\d{4}$/.test(x) && Number(x) >= 2010 && Number(x) <= 2020,
    eyr: (x) => /^\d{4}$/.test(x) && Number(x) >= 2020 && Number(x) <= 2030,
    hgt: (x) => (/^\d+\s*cm$/.test(x) && testHgt(x, 150, 193))
      || (/^\d+in$/.test(x) && testHgt(x, 59, 76)),
    hcl: (x) => /^#[0-9a-f]{6}$/.test(x),
    ecl: (x) => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(x),
    pid: (x) => /^\d{9}$/.test(x),
  };
}

function getIsValidPassportPart1(passportStr) {
  const requirements = getRequirements();
  const parsed = Object.fromEntries(
    passportStr.split(/\s+/g).map((s) => s.split(':')),
  );

  for (const field in requirements) {
    if (!parsed[field]) {
      return false;
    }
  }

  return true;
}

function getIsValidPassportPart2(passportStr) {
  const requirements = getRequirements();
  const parsed = Object.fromEntries(
    passportStr.split(/\s+/g).map((s) => s.split(':')),
  );

  for (const field in requirements) {
    const value = parsed[field];
    if (!value || !requirements[field](value)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  getIsValidPassportPart1,
  getNumberOfValidPassportsPart1: (xs) => xs.filter(getIsValidPassportPart1).length,
  getNumberOfValidPassportsPart2: (xs) => xs.filter(getIsValidPassportPart2).length,
};
