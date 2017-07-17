const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
//const BabiliPlugin = require("babili-webpack-plugin");
module.exports = (options = {}) => ({
  entry: './src/main.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        rules: [
          {
            test: /\.vue$/,
            use:[{loader:"vue-loader"}]
          },
          {
            test: /\.scss$/,
            use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "sass-loader" // compiles Sass to CSS
              }]
          }
        ]
    },
    plugins:options.dev?[
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]:[
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
			new UglifyJSPlugin()
    ]
})
