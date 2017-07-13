const Module = require('module')
const fs = require('fs')
const path = require('path')

const CORE_MODULE_NAMES = Object.keys(process.binding('natives'))
function isCoreModule (name) {
  return CORE_MODULE_NAMES.indexOf(name) > -1
}

module.exports = function (name, cwd) {
  cwd = cwd || process.cwd()

    // core modules
  if (isCoreModule(name)) {
    return name
  }

    // prepare a temp module file in cwd
  let tempFilePrefix = path.join(cwd, './________for-getting-module-path')
  let tempFile
  while (true) {
    tempFile = `${tempFilePrefix}.js`
    try {
      fs.statSync(tempFile)
      tempFilePrefix += '_'
    } catch (e) {
      break
    }
  }
  fs.writeFileSync(tempFile, 'module.exports = {}')

    // load temp module
  const tempModule = new Module(tempFile, null)
  tempModule.load(tempFile)

    // delete the temp module file
  fs.unlinkSync(tempFile)

  try {
        // resolve module path
    return Module._resolveFilename(name, tempModule)
  } catch (e) {
    console.error(e)
  }
  return ''
}
