'use strict';

var http = require('http'),
    port = process.argv[2],
    th2 = require('through2');


var write = function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

var end = function(done) {
    done();
}

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(th2(write, end)).pipe(res);

    } else {
        res.end('need to be a POST request\n');
    }
});

server.listen(port);

/*
  var http = require('http');
  var through = require('through2');

  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
 */
