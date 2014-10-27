# mocha-hollywood-reporter

> A mocha reporter with a Hollywood flair

# Table of Contents
  * [Intro](#intro)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Authors](#authors)
  * [License](#license)


## Intro
mocha-hollywood-reporter is a reporter for [mocha](https://github.com/mochajs/mocha), patterned after the mocha-provided `dot` reporter. It was created in honor of [a coworker](https://github.com/robmcguinness).


## Installation
Install via `npm`:

```
$ npm install --save-dev mocha-hollywood-reporter
```

This will add mocha-hollywood-reporter to your `package.json` file, in your `devDependencies` section.

You can also install globally:

```
$ npm install -g mocha-hollywood-reporter
```


## Usage
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


## Authors

**Rob Warner** ([rwarner@grailbox.com](rwarner@grailbox.com))



## License
Copyright (c) 2014 Rob Warner

Released under the MIT license