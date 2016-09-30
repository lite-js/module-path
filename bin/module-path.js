#!/usr/bin/env node
var commander = require('commander');
var modulePath = require('../lib/index.js');
var pkg = require('../package.json');

commander
    .version(pkg.version)
    .option('--cwd <cwd>', 'cwd')
    .parse(process.argv);

var cwd = commander.cwd || process.cwd();
var name = commander.args[0];

if (!name) {
    console.error('[ERROR: no module name specified.]');
    commander.outputHelp();
} else {
    var result = modulePath(name, cwd);
    if (result) {
        console.log(result);
    } else {
        console.error('[ERROR: this module is not installed.]');
    }
}
