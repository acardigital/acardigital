module.exports = {
  name: 'publishable',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/publishable',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
