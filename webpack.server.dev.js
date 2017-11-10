const webpack = require('webpack');
const path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: './server/server.js',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader','eslint-loader']
        }
    ]
    },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}
