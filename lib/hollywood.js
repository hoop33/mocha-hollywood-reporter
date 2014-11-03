var Base = require('mocha').reporters.Base;
var color = Base.color;
var list = Base.list;

function Hollywood(runner) {
  Base.call(this, runner);

  var allPass = '\n\n•_•)\n( •_•)>┌▅-▅\n(┌▅_▅)\nBeautiful!\n\n';
  var fail = '\n\n٩◔̯◔۶\n ٩◔̯◔۶\n  ٩◔̯◔۶\nPull Request Denied!!!\n';
  var tests = [];
  var failures = [];
  var passes = [];
  var skipped = [];

  var print = function(message) {
    process.stdout.write(message);
  };

  var println = function(message) {
    print(message + '\n');
  };

  runner.on('start', function() {
  });

  //runner.on('test', function(test) {
  //});

  runner.on('test end', function(test) {
    tests.push(test);
  });

  runner.on('pending', function(test) {
    skipped.push(test);
  });

  runner.on('pass', function(test) {
    passes.push(test);
    println(color('bright yellow', '★ ') + 'it ' + test.title);
  });

  runner.on('fail', function(test) {
    failures.push(test);
    println(color('fail', '☛ it ' + test.title));
  });

  runner.on('end', function() {
    if (failures.length > 0) {
      list(failures);
      print(color('fail', fail));
    } else {
      print(color('green', allPass));
    }
    println('\nSummary\n=======');
    println(color('green',         'pass:    ' + passes.length));
    println(color('fail',          'fail:    ' + failures.length));
    failures.forEach(function(failure) {
      println(color('fail', '   ☛ it ' + failure.title));
    });
    println(color('bright yellow', 'skipped: ' + skipped.length));
    println(color('suite',         'total:   ' + tests.length));
  });
}

exports = module.exports = Hollywood;
