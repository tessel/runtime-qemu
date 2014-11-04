#!/usr/bin/env node

var spawn = require('child_process').spawn
var net = require('net')

function collect (fn) {
	var stream = new (require('stream').Writable)
	var bufs = [];
	stream._write = function (data, enc, cb) { bufs.push(data); cb() }
	stream.on('pipe', function (s) { s.on('end', function () { fn(Buffer.concat(bufs)); }) })
	return stream;
}

var kernel = process.argv[2];

function run (kernel)
{
  var ret;

  var server = net.createServer(function (c) {
    c.once('data', function (code) {
      setImmediate(function () {
        ret && spawn('kill', ['-9', ret.pid]).on('exit', function (c) {
          process.exit(parseInt(String(code)));
        })
      });
    });
  })
  server.listen(0, function () {
    launchqemu(server.address().port);
  })

  function launchqemu (port) {
  	process.env.STELLARIS_FLASH = 8196
  	process.env.STELLARIS_SRAM = 8196
  	ret = spawn('qemu-system-arm', [
  	  '-M', 'lm3s6965evb', '--kernel', kernel,
  	  '-no-reboot', '-nographic', '-monitor', 'null',
  	  '-serial', 'stdio',
      '-serial', 'telnet::' + port,
  	].concat(
  		(process.argv.indexOf('-d') > -1 ? ['-s', '-S'] : []),
  		(process.argv.indexOf('-v') > -1 ? ['-d', 'cpu,exec,in_asm'] : [])
  	));

    ret.on('exit', function (code) {
      process.exit(code);
    })
    ret.on('error', function (err) {
        console.error(err);
        process.exit(1);
    });
  	ret.stderr.pipe(process.stderr);
  	ret.stdout.pipe(process.stdout);

  	var input = process.argv.slice(3).filter(function (d) {
  		return d.indexOf('-') != 0;
  	});

  	ret.stdin.write(input.join(' ') + '\n');
  }
}

run(kernel);
