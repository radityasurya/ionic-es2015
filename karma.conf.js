var specFiles = [
  'src/entry.test.js',
  'src/**/*.spec.js'
];

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: specFiles,
    preprocessors: {
        'src/entry.test.js': ['webpack'],
        'src/**/*.spec.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          { 
            test: /\.js$/, 
            loader: "babel-loader"
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
