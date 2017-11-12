const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   entry: ['webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true'],
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /(node_modules|bower_components)/,
         loader: ['eslint-loader']
         }
       ]
     },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: path.join(__dirname, "dist"),
     compress: true,
     hot: true,
     historyApiFallback: true
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoEmitOnErrorsPlugin()
   ],
   output: {
      publicPath: '/'
    }
 });
