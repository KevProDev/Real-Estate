
const path = require('path');
const webpack = require('webpack')
const htmlpack = require('html-webpack-plugin')

// const srcDir = resolve(__dirname, 'src')



module.exports = {
  entry: {
    realEstate: './assets/js/realEstate/realEstate.js'
  },
  output: { filename: '[name].js',
            path: path.resolve(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'es2015', { modules: false } ],
            'stage-0', 'react'
          ]
        }
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }
    ]
  },
  plugins: [
    new htmlpack({
      template: "./index.html"
    })
  ]
};
