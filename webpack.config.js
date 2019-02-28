
const path = require('path');
const webpack = require('webpack')



module.exports = {
  entry: {
    realEstate: './assets/js/realEstate/realEstate.js'
  },
  output: { filename: '[name].js',
            path: path.resolve(__dirname, 'public') },
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
  }
//         new webpack.optimize.UglifyJsPlugin({
//   sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
// }),
// new webpack.Define
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    // })

};
