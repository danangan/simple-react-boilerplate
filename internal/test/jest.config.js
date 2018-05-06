const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  transform: {
    "^.+\\.(css|scss|less)$": "jest-css-modules",
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  setupFiles: ['<rootDir>/internal/test/setup']
}
