'use strict';
var trumpet = require('trumpet'),
    tr = trumpet(),
    th2 = require('through2');


var stream = tr.select('.loud').createStream();

var write = function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}
var end = function(done) {
    done();
}

// It seems that this is like a sub section of the entire tr part.
// and since it pipes back to itself then it 'modifies' the stream???
stream.pipe(th2(write, end)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);