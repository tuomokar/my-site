module.exports = {
  transform: {
    '^.+\\.tsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mdx'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
