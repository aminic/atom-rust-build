'use babel';
'use strict';

/*
Build tools available to atom-build.
These are sorted in order of priority
and divided into groups as seen by comments below
*/
module.exports = [
  /* generic (can be configured to do anything) */
  require('./atom-build'),
  require('./Cargo'),
  require('./Rustc')
];
