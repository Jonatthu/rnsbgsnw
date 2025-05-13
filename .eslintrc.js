/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['../../.eslintrc.js'],
  plugins: ['react-compiler'],
  rules: {
    // App-specific rule overrides
    // 'react-native/no-inline-styles': 'warn',
    // 'react-native/no-raw-text': 'off',
    // 'react-native/sort-styles': 'warn',
    // 'react/no-unescaped-entities': 'warn',
    // 'react-native/no-color-literals': 'warn',
    'react-compiler/react-compiler': 'error',
    'react-native/no-raw-text': 'off',
  },
};
