/**
 * Modules
 */

var omit = require('@f/omit')
var setProp = require('@f/set-prop')

/**
 * Expose omitProp
 */

module.exports = omitProp['default'] = omitProp

/**
 * omitProp
 */

function omitProp (path, obj) {
  if (typeof path === 'string') {
    path = path.split('.')
  }

  if (path.length > 1) {
    var subpath = path.slice(0, -1)
    var key = path[path.length - 1]

    return setProp(subpath, obj, function (obj) {
      return omit(obj, key)
    })
  }

  return omit(obj, key)
}
