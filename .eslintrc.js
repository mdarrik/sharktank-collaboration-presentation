module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript',
    'plugin:vue-a11y/base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        jsxBracketSameLine: true,
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
