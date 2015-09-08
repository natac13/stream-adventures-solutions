'use strict';

var concat = require('concat-stream');


var reverser = function(body) {
    var body = body.toString().split('').reverse().join('');
    process.stdout.write(body);
}
process.stdin.pipe(concat(reverser));

/*
  var concat = require('concat-stream');

  process.stdin.pipe(concat(function (src) {
      var s = src.toString().split('').reverse().join('');
      console.log(s);
  }));
 */