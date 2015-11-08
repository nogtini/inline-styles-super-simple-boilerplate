var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader?stage=0"]
    },{
      test: /\.html$/,
      loader: "file?name=[name].[ext]"
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!postcss-loader')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  }
};
