module-path
===========

[![npm version](https://badge.fury.io/js/%40lite-js%2Fmodule-path.svg)](https://badge.fury.io/js/%40lite-js%2Fmodule-path) [![Build Status](https://travis-ci.org/lite-js/module-path.svg?branch=master)](https://travis-ci.org/lite-js/module-path)

locate the path of an installed node module

## install

```shell
$ npm install @lite-js/module-path [-g]
```

## API

```javascript
const modulePath = require('@lite-js/module-path')

// global module
console.log(modulePath('zfinder'))
// => /Users/liangwensen/.nvm/versions/node/v4.2.2/lib/node_modules/.zfinder_npminstall/zfinder/0.2.9/zfinder/lib/index.js

// local module
console.log(modulePath('mocha'))
// => /Users/liangwensen/repo/leungwensen/module-path/node_modules/.npminstall/mocha/3.4.2/mocha/index.js

// core module
console.log(modulePath('path'))
// => path
```

## CLI

```shell
$ npm install @lite-js/module-path -g
$ module-path zfinder
# /Users/liangwensen/.nvm/versions/node/v4.2.2/lib/node_modules/.zfinder_npminstall/zfinder/0.2.9/zfinder/lib/index.js
$ module-path npm
# /Users/liangwensen/.nvm/versions/node/v4.2.2/lib/node_modules/npm/lib/npm.js
```

## Thanks to

* [tj/commander.js](https://github.com/tj/commander.js)
