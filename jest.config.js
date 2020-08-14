module.exports = {
  transform: {
    '^.+\\.tsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mdx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
