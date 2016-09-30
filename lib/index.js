/*
 */
var fs = require('fs');
var path = require('path');
var Module = require('module');

var CORE_MODULE_NAMES = Object.keys(process.binding('natives'));
function isCoreModule(name) {
    return CORE_MODULE_NAMES.indexOf(name) > -1;
}

module.exports = function (name, cwd) {
    cwd = cwd || process.cwd();

    // core modules
    if (isCoreModule(name)) {
        return name;
    }

    // prepare a temp module file in cwd
    var tempFilePrefix = path.join(cwd, './________for-getting-module-path');
    var tempFile;
    while (true) {
        tempFile = tempFilePrefix + '.js';
        try {
            fs.statSync(tempFile);
            tempFilePrefix += '_';
        } catch (e) {
            break;
        }
    }
    fs.writeFileSync(tempFile, 'module.exports = {};');

    // load temp module
    var tempModule = new Module(tempFile, null);
    tempModule.load(tempFile);

    // delete the temp module file
    fs.unlinkSync(tempFile);

    try {
        // resolve module path
        return Module._resolveFilename(name, tempModule);
    } catch (e) {
        console.error(e);
    }
    return '';
};