'use strict';
var duplexer = require('duplexer'),
    spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
    var x = spawn(cmd, args);
    return duplexer(x.stdin, x.stdout);
}