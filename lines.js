'use strict';
var through = require('through2'),
    split = require('split'),
    x = 0;
var write = function(buffer, _, next) {
    var buffer = buffer.toString();
    x += 1;
    x % 2 !== 0 ? this.push(buffer.toLowerCase() + '\n') :
        this.push(buffer.toUpperCase() + '\n');
    next();
}

var end = function(done) {
    done();
}

process.stdin.pipe(split()).pipe(through(write, end)).pipe(process.stdout);


/*
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;


 */