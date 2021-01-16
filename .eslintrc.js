module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/airbnb', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off'
  },
  overrides: [
    {
      files: ['src/**/*', 'tests/unit/**/*', 'tests/e2e/**/*'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: {
        browser: true
      }
    },
    {
      files: ['**/*.spec.js', '**/*.mock.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false
      }
    }
  ]
}
