const { getValidPasswords } = require(".");
const passwords = require("./data");

describe("getValidPasswords", () => {
  it("returns the number of valid passwords", () => {
    const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: cccccccc"];
    expect(getValidPasswords(input)).toBe(2);
    expect(getValidPasswords(passwords)).toBe(469);
  });
});
