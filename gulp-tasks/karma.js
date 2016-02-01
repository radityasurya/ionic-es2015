var gulp = require('gulp');
var path = require('path');
var Server = require('karma').Server;

var karmaConfigFile = path.resolve(__dirname + '/../karma.conf.js');

gulp.task('karma:once', function (done) {
  new Server({
    configFile: karmaConfigFile,
    singleRun: true
  }, function() {
      done()
  }).start();
});

gulp.task('karma:tdd', function (done) {
  new Server({
    configFile: karmaConfigFile,
    singleRun: false
  }, function() {
      done()
  }).start();
});