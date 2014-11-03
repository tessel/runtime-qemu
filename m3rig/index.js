#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs')

exec('arm-none-eabi-objdump -t ./out/Release/main | grep "m3rig"', function (err, stdout, stderr) {
	var idx = parseInt(stdout.match(/[0-9a-f]+/i), 16);
	var input = fs.readFileSync(__dirname + '/../out/Release/main.bin')
	console.log(idx.toString(16));
	input.writeUInt32LE(0x11223344, idx);
	fs.writeFileSync(__dirname + '/../out/Release/main.bin', input);
	console.log('done');
})
