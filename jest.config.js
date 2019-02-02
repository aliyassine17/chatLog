module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss|jpg|png|svg)$': '<rootDir>/empty-module.js'
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  modulePaths: [
    '<rootDir>/src'
  ],
  name: 'chatLog',
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};