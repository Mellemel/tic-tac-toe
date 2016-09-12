const path = require('path')
const SRC = path.join(__dirname, 'src/')
const NODE_MODULES = path.join(__dirname, 'node_modules/')

const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const config = {
  entry: './src',
  noInfo: true,
  debug: true,
  devTool: 'eval-source-map',
  output: {
    path: './build',
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css?sourceMap!postcss!sass?sourceMap' },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=build/fonts/[name].[ext]' },
      { test: /\.(jpg|png|svg)$/, loader: 'file?name=build/images/[name].[ext]' },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  resolve: {
    root: [SRC, NODE_MODULES],
    alias: {
      'actions': path.join(SRC, 'actions/')
    }
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:3100/'
    },
      {
        reload: false
      }
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      title: 'tic-tac-toe',
      minify: {
        removeComments: true,
        collapseWhitspace: true
      },
      inject: true;
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
    inline: true,
    hot: true,
    noInfo: false,
    quiet: false,
    colors: true,
    port: 3000,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },
  },
  postcss: () => [autoprefixer]
}

module.exports = config