var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['webpack']);
  gulp.watch('./src/**/*.js', ['webpack']);
});
