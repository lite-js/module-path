# module-path(1)

locate the path of an installed node module

## installation

```shell
$ npm install module-path [-g]
```

## usage

API:

```javascript
var modulePath = require('module-path');
var pathOfUnderscore = modulePath('underscore');
// -> /Users/liangwensen/.nvm/versions/node/v0.12.2/lib/node_modules/underscore
var pathOfPkgDir = modulePath('pkg-dir');
// -> /Users/liangwensen/repo/leungwensen/node-module-path/node_modules/pkg-dir
```

CLI:

```shell
$ npm install module-path -g
$ module-path pkg-dir
# /Users/liangwensen/repo/leungwensen/node-module-path/node_modules/pkg-dir
$ module-path npm
# /Users/liangwensen/.nvm/versions/node/v0.12.2/lib/node_modules/npm
```

## Thanks to

* [jonschlinkert/global-modules](https://github.com/jonschlinkert/global-modules)
* [sindresorhus/pkg-dir](https://github.com/sindresorhus/pkg-dir)
* [tj/commander.js](https://github.com/tj/commander.js)

