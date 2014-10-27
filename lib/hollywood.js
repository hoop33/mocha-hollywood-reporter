var Base = require('mocha').reporters.Base;
var color = Base.color;
var list = Base.list;

function Hollywood(runner) {
  Base.call(this, runner);

  var allPass = '\n\n•_•)\n( •_•)>┌▅-▅\n(┌▅_▅)\nBeautiful!\n\n';
  var fail = '\n\n٩◔̯◔۶\n ٩◔̯◔۶\n  ٩◔̯◔۶\nPull Request Denied!!!\n';
  var pass = '★ ';
  var tests = [];
  var failures = [];
  var passes = [];
  var skipped = [];

  var log = function(message) {
    process.stdout.write(message);
  };

  runner.on('start', function() {
  });

  runner.on('test end', function(test) {
    tests.push(test);
  });

  runner.on('pending', function(test) {
    skipped.push(test);
  });

  runner.on('pass', function(test) {
    passes.push(test);
    log(color('bright yellow', pass));
  });

  runner.on('fail', function(test) {
    failures.push(test);
    log(color('fail', '⚡'));
  });

  runner.on('end', function() {
    if (failures.length > 0) {
      list(failures);
      log(color('fail', fail));
    } else {
      log(color('green', allPass));
    }
    log('');
    log(color('green',         'pass:    ' + passes.length + '\n'));
    log(color('fail',          'fail:    ' + failures.length + '\n'));
    log(color('bright yellow', 'skipped: ' + skipped.length + '\n'));
    log(color('suite',         'total:   ' + tests.length + '\n'));
  });
}

exports = module.exports = Hollywood;
