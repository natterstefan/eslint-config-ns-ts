module.exports = {
  extends: [
    'eslint-config-ns',
    // add typescript specific linting rules and add prettier typescript support
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'sort-keys': 0,

    // jest settings
    'jest/prefer-strict-equal': 'error',

    // react settings
    'react/prop-types': 0, // focus on interfaces and types instead

    // ts settings
    // allow to use _ as prefix for unused arguments to functions, in order to implement interfaces
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-explicit-any': 0, // will be checked by tsconfig.js
    '@typescript-eslint/explicit-function-return-type': 0, // will be checked by tsconfig.js
    '@typescript-eslint/interface-name-prefix': [
      2,
      {
        prefixWithI: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.(test|spec).tsx?', '*.(test|spec).jsx?'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'max-classes-per-file': 0,
        'no-console': 0,
        // lets loosen the typescript rules in test files a little
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React
      // to use
      version: 'detect',
    },
  },
}
