/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  setupFiles: ['<rootDir>/src/index.ts'],
  setupFilesAfterEnv: [],
  globalSetup: '',
  globalTeardown: '',
  testMatch: null,
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  verbose: true,
  testPathIgnorePatterns: [],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts']
};
