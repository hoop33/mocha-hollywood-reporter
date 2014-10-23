// https://gist.github.com/bevacqua/8492639

var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('publish', ['publish:npm']);

gulp.task('publish:npm', function(done) {
  spawn('npm', ['publish'], { stdio: 'inherit' }).on('close', done);
});
