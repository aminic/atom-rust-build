'use babel';
'use strict';

var fs = require('fs');

module.exports.niceName = 'Rustc';

module.exports.isEligable = function (path) {
  return fs.existsSync(path + '/Cargo.toml');
};

module.exports.settings = function (path) {
  return [ {
    name: 'Rustc: build',
    exec: 'rustc',
    args: [  context.filepath,'-o '+context.filepath+'.out' ],
    sh: false,
    errorMatch: '(?<file>.+.rs):(?<line>\\d+):(?<col>\\d+):'
  },
  {
    name: 'Rustc: test',
    exec: 'rustc',
    args: [ '--test',context.filepath ],
    sh: false,
    errorMatch: '(?<file>.+.rs):(?<line>\\d+):(?<col>\\d+):'
  },
  {
    name: 'Rustc: run',
    exec: context.filepath+'.out',
    args: [ '' ],
    sh: false,
    errorMatch: '(?<file>.+.rs):(?<line>\\d+):(?<col>\\d+):'
  }];
};
