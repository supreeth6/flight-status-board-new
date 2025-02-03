/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  // testEnvironment: "node",
  // transform: {
  //   "^.+.tsx?$": ["ts-jest",{}],
  // },
  moduleNameMapper: {
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/_tests_/FlightTable.test.ts'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/',  
  ],
};