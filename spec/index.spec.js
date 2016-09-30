var path = require('path');
var modulePath = require('../lib/index.js');

describe('module-path', function () {
    it('exists', function () {
        expect(typeof modulePath).toEqual('function');
    });
    it('local module path', function () {
        expect(modulePath('commander', __dirname))
            .toBe(path.resolve(__dirname, '..', 'node_modules', 'commander/index.js'));
    });
    it('global module path', function () {
        expect((modulePath('npm').indexOf('npm/lib/npm.js') > -1))
            .toBe(true);
    });
    it('core module path', function () {
        expect(modulePath('fs')).toBe('fs');
        expect(modulePath('path')).toBe('path');
    });
});
