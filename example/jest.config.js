module.exports = {
  collectCoverageFrom: [
    'src/**/*.tsx?',
    '!src/(__mocks__)/*.{js,jsx,ts,tsx}',
    '!src/(__stories__)/*.{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/(build|dist|es|esm|lib|node_modules)/',
    '<rootDir>/src/*/(build|dist|es|esm|lib|node_modules)/',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['/**/__tests__/*.test.ts', '/**/__tests__/*.test.tsx'],
}
