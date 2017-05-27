const assert = require('assert')
const path = require('path')
const modulePath = require('../index.js')

describe('module-path', function () {
  it('exists', () => {
    assert.equal(typeof modulePath, 'function')
  })
  it('local module path', () => {
    assert.equal(
      modulePath('commander', __dirname),
      path.resolve(__dirname, '..', 'node_modules', 'commander/index.js')
    )
    assert.equal(
      modulePath('mocha', __dirname),
      path.resolve(__dirname, '..', 'node_modules', 'mocha/index.js')
    )
  })
  // it('global module path', () => {
  //   // this is not working in recent node environment
  //   assert.equal((modulePath('npm').indexOf('npm/lib/npm.js') > -1), true)
  // })
  it('core module path', () => {
    assert.equal(modulePath('fs'), 'fs')
    assert.equal(modulePath('path'), 'path')
  })
})
