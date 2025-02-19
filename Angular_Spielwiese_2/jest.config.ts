import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', { useESM: true }],
    '^.+\\.mjs$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.ts', '.mts'], // `.mjs` entfnt!
  moduleNameMapper: {
    '@angular/core/testing': '<rootDir>/node_modules/@angular/core/fesm2022/testing.mjs',
    '@angular/platform-browser-dynamic/testing': '<rootDir>/node_modules/@angular/platform-browser-dynamic/fesm2022/testing.mjs'
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      useESM: true
    }
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  modulePaths: []
};

export default config;
