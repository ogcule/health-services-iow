const merge = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
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
     proxy: {
       "/": "http://localhost:3000"
     }
   }
 });
