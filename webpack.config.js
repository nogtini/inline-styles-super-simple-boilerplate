module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader?stage=0"]
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }],
  },
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
};
