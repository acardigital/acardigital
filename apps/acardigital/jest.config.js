module.exports = {
  name: 'acardigital',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/acardigital',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
