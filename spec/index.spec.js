
var path = require('path');
var modulePath = require('../lib/index.js');
var globalModulesDir = require('global-modules');

describe('module-path', function () {
    it('exists', function () {
        expect(typeof modulePath).toEqual('function');
    });
    it('local module path', function () {
        expect(modulePath('pkg-dir', __dirname))
            .toBe(path.resolve(__dirname, '..', 'node_modules', 'pkg-dir'));
        expect(modulePath('global-modules', __dirname))
            .toBe(path.resolve(__dirname, '..', 'node_modules', 'global-modules'));
    });
    it('global module path', function() {
        expect(modulePath('npm'))
            .toBe(path.resolve(globalModulesDir, 'npm'));
    });
});
