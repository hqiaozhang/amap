const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const config = require('./base.config')
const utils = require('./utils')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// 清理 /dist 文件夹插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 复制静态文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 把css从js中分离出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//打包
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = merge(common, {
  // 入口
  entry: {
    main: './src/main.js',
  },
  mode: 'production', // 生产环境
  // 对调试源码(debug)和运行基准测试(benchmark tests)很有帮助
  // devtool: 'source-map', //
  // 出口文件(js)
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('scripts/[name].[hash].js'),
    chunkFilename: utils.assetsPath('scripts/[id].[hash].js'),
    publicPath: config.build.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '/'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    // 构建之前先清里dist文件
    new CleanWebpackPlugin([config.build.outputPath]),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: require('./vendor-manifest.json')
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: './src/index.html',
      favicon: './favicon.ico',
      inject: true,  // 向template或者templateContent中注入所有静态资源
      // false就是不使用html压缩
      minify: {
        collapseWhitespace: true //折叠空白区域 也就是压缩代码
      },
      hash: true, // 是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
    }),
    new UglifyJSPlugin({
      sourceMap: true // 开启代码压缩
    }),
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),
    // 分离css
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('styles/[name].[hash].css'),
      chunkFilename: '[id].[hash].css'
    }),
    // 复制自定义静态资源
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    //打包
    new FileManagerPlugin({
      onEnd: {
        delete: [
          './build/aitectcare-web.tar.gz'
        ],
        archive: [
          { source: `./build/dist`, destination: './build/aitectcare-web.tar.gz' }
        ]
      }
    })
  ]
  .concat(
    utils.htmlIncludeAssets()
  )
});