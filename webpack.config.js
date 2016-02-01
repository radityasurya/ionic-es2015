var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  devtool: 'source-map',
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      // Transpile ES2015 to ES5 with Babel
      { 
        test: /\.js$/, 
        loader: "babel"
      },
    
      // Store .html files as strings in angular template cache
      { 
        test: /\.html$/, 
        loader: 'ng-cache?prefix=[dir]/[dir]' 
      },
    
      // Compile sass to css, which will then get injected as a <style> tag
      {   
        test: /\.scss$/, 
        loaders: ["style", "css?sourceMap", "sass?sourceMap"] 
      },
    
      // Save images and font files as DataURIs (or files)
      {   
        test: /\.(png|jpg|ttf|eot|svg|woff)(\?v=2.0.1)?$/,
        loader: 'url?limit=100000&name=[path][name].[ext]?[hash]'
      }
    ]
  },
  sassLoader: {
    includePaths: ['./resources/scss', './src/modules']
  }
}
