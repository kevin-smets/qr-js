#!/usr/bin/env node
'use strict';

var base64Img = require('base64-img');
var qrcode = require('yaqrcode');
var path = require('path');

var argv = require('yargs')
  .usage('qrjs <data> [-o fileName] [--html]')
  .option('output', {
    alias: 'o',
    describe: 'Output to file',
    type: 'string'
  })
  .option('html', {
    describe: 'Output as html',
    type: 'boolean'
  })
  .help('help')
  .version()
  .argv;

var input = argv._[0];

if (typeof input !== "string") {
  console.log("I need something to work with, e.g. 'qrjs http://github.com/kevin-smets'")
  process.exit(1);
}

var qrOut = qrcode(input);

if (argv.o) {
  var fileName = path.basename(argv.o, '.gif')
  base64Img.imgSync(qrOut, '', fileName)
  console.log("QR code saved to file " + fileName + ".gif");
} else {
  if (argv.html) {
    console.log('<img src="' + qrOut + '" alt="" />');
  } else {
    console.log(qrOut);
  }
}
