module.exports = {
  setupFilesAfterEnv: ['./test/testSetup.js'],
  moduleFileExtensions: ['js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};