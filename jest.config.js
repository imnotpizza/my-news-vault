const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // jest 절대경로 설정 부분
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['./src/**/*.[jt]sx', '!**/*.stories.[jt]s?(x)'],
  coverageThreshold: {
    './src/': {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
