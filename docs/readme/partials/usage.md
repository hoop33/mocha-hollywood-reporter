If you're using [gulp](http://gulpjs.com/), use `require` to include mocha-hollywood-reporter in your task, and then pass it in the `reporter` field to mocha:

``` javascript
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var hollywood = require('mocha-hollywood-reporter');

gulp.task('test', function() {
  var config = require('../config').test;
  gulp.src(config.src)
    .pipe(mocha({ reporter: hollywood }));
});
```

If you're launching mocha from the command line, pass mocha-hollywood-reporter using the `-R` or `--reporter` flag:

```
$ mocha -R mocha-hollywood-reporter
```
