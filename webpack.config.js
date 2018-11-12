const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { // 处理 .css 文件
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { // 处理 图片
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      { // 处理 字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      { // 处理 cvs数据文件
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      { // 处理 xml数据文件
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      { // babel 转译
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'new Output Management'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  mode: 'development'
}