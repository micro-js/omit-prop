/**
 * Imports
 */

var omitProp = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var obj = {a: {b: 1}}
  var newObj = omitProp('a.b', obj)

  t.equal(obj.a.b, 1)
  t.equal(newObj.a.b, undefined)
  t.equal(Object.keys(newObj.a).length, 0)
  t.notEqual(obj, newObj)

  obj = {a: 1}
  newObj = omitProp('a', obj)

  t.equal(obj.a, 1)
  t.equal(newObj.a, undefined)
  t.equal(Object.keys(newObj).length, 0)

  t.end()
})
