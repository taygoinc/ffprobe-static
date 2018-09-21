//
// With credits to https://github.com/eugeneware/ffmpeg-static
//
var os = require('os');
var path = require('path');

var platform = os.platform();
if (platform !=='linux') {
  console.error('Unsupported platform.');
  process.exit(1);
}

var arch = os.arch();
if (arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

var ffprobePath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'ffprobe'
);

exports.path = ffprobePath;
