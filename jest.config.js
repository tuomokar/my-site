module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mdx'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
