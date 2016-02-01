var gulp = require ('gulp');
require('./gulp-tasks/webpack');
require('./gulp-tasks/watch');
require('./gulp-tasks/karma');
require('./gulp-tasks/eslint');

gulp.task('build', ['webpack']);