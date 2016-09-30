module-path(1)
==============

locate the path of an installed node module

## installation

```shell
$ npm install module-path [-g]
```

## usage

API:

```javascript
var modulePath = require('module-path');

// global module
var pathOfZFinder = modulePath('zfinder');
// => /Users/liangwensen/.nvm/versions/node/v4.2.2/lib/node_modules/.zfinder_npminstall/zfinder/0.2.9/zfinder/lib/index.js

// local module
var pathOfJasmine = modulePath('jasmine');
// => /Users/liangwensen/repo/leungwensen/node-module-path/node_modules/.npminstall/jasmine/2.5.2/jasmine/lib/jasmine.js

// core module
var pathOfPath = modulePath('path');
// => path
```

CLI:

```shell
$ npm install module-path -g
$ module-path zfinder
# /Users/liangwensen/.nvm/versions/node/v4.2.2/lib/node_modules/.zfinder_npminstall/zfinder/0.2.9/zfinder/lib/index.js
$ module-path npm
# /Users/liangwensen/.nvm/versions/node/v4.2.2/lib/node_modules/npm/lib/npm.js
```

## Thanks to

* [tj/commander.js](https://github.com/tj/commander.js)
