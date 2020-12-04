module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'no-bitwise': 0,
    'guard-for-in': 0,
  },
  globals: {
    describe: true,
    expect: true,
    it: true,
  },
};
