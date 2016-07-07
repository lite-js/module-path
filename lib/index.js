var fs = require('fs');
var path = require('path');

var pkgDir = require('pkg-dir');
var globalModulesDir = require('global-modules');

module.exports = function (name, cwd) {
    cwd = cwd || process.cwd();
    cwd = pkgDir.sync(cwd);

    var localPath = path.join(cwd, 'node_modules', name);
    if (fs.existsSync(localPath)) return localPath;
    var globalPath = path.join(globalModulesDir, name);
    if (fs.existsSync(globalPath)) return globalPath;
    return '';
};