var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config');

var srcEntries = [
  'src/entry.js'
];

gulp.task('webpack', function() {
  return gulp.src(srcEntries)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('www/app'));
});
