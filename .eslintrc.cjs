module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 'off',
    'no-prototype-builtins': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
  },
};
