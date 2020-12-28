module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['<rootDir>/tests/unit/setup'],
  setupFilesAfterEnv: ['<rootDir>/tests/unit/matchers'],
  testMatch: ['**/(*.)spec.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|scss|jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$': 'jest-transform-stub'
  },
  globals: {
    'vue-jest': {
      experimentalCSSCompile: false
    }
  },
  collectCoverageFrom: [
    '**/models/**/*.js',
    '**/services/**/*.js',
    '**/store/**/*.js',
    '!**/store.js',
    '!**/*.mock.js',
    '!**/*.types.js',
    '!**/index.js'
  ]
}
