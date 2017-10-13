const {execString} = require('applescript')
    , {promisify} = require('util')
    , exec = promisify(execString)

module.exports = function(...args) {
  return new Promise((resolve, reject) =>
    execString(String.raw(...args),
      (err, result, log) =>
        err ? reject(err)
            : resolve({result, log})))
}