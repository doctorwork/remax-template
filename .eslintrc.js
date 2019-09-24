module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    App: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-case-declarations': [0],
    'require-atomic-updates': [0],
    'react/jsx-uses-vars': 2,
  },
};
