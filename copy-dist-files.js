var fsExtra = require('fs-extra');
var resources = [
  // polyfills
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js',
  // css
  'styles.css',
  // other files
];
resources.map(function(sourcePath) {
  var destPath = `aot/${sourcePath}`;
  fsExtra.copySync(sourcePath, destPath);
});
