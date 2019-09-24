module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  globals: {
    App: true
  },
  parserOptions: {
    // object spread requires ecma 9
    // or use other parser: @typescript-eslint/parser
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-case-declarations': [0],
    'require-atomic-updates': [0],
    'react/jsx-uses-vars': 2
  }
};
