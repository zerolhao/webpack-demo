# webpack-demo
1. 安装和基础构建
2. 资源管理([配置](https://webpack.docschina.org/guides/asset-management))
    - 加载css `npm install --save-dev style-loader css-loader`
    - 加载图片['npm install --save-dev file-loader'](https://webpack.docschina.org/loaders/file-loader/)
    - 使用`url-loader`加载图片 [`url-loader`](https://webpack.docschina.org/loaders/url-loader)
        + `url-loader`类似`file-loader`，但在文件大小（单位 byte）低于指定的限制`limit`时，可以返回一个 DataURL。
    - 加载字体 [`file-loader`](https://webpack.docschina.org/guides/asset-management#%E5%8A%A0%E8%BD%BD%E5%AD%97%E4%BD%93)
    - 加载数据 [`npm install --save-dev csv-loader xml-loader`](https://webpack.docschina.org/guides/asset-management#%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)
        + json 文件内置支持，不需要额外引入loader
        + cvs和xml不支持，需要引入[`csv-loader`](https://github.com/theplatapi/csv-loader) 和 [`xml-loader`](https://github.com/gisikw/xml-loader)
3. 管理输出
    - [准备](https://webpack.docschina.org/guides/output-management/#%E9%A2%84%E5%85%88%E5%87%86%E5%A4%87)
    - [设定 HtmlWebpackPlugin](https://webpack.docschina.org/guides/output-management/#%E8%AE%BE%E5%AE%9A-htmlwebpackplugin)
        + HtmlWebpackPlugin 会创建一个全新的html文件，并将所有的 bundle 会自动添加到 html 中。
        + 原html内meta消失了，待解决
        ```
        npm install --save-dev html-webpack-plugin
          const path = require('path');
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        module.exports = {
          entry: {
            app: './src/index.js',
            print: './src/print.js'
          },
          plugins: [
            new HtmlWebpackPlugin({
              title: 'Output Management'
            })
          ],
           output: {
             filename: '[name].bundle.js',
             path: path.resolve(__dirname, 'dist')
           }
         };
        ```
4. 开发
    - [使用 source map](https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-source-map)追踪错误和警告在源代码中的原始位置
      + [更多](https://webpack.docschina.org/configuration/devtool/)
    - [开发工具-自动编译](https://webpack.docschina.org/guides/development/#%E9%80%89%E6%8B%A9%E4%B8%80%E4%B8%AA%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7)
      + [使用观察模式](https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8%E8%A7%82%E5%AF%9F%E6%A8%A1%E5%BC%8F)
        ```
        //packge.json
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
        + "watch": "webpack --watch",
          "build": "webpack"
        },
        ...
        // 运行 npm run watch
        // 这种方法需要刷新浏览器才能看到效果
        ```
      + [使用 webpack-dev-server ](https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-server)
        ```
        npm install --save-dev webpack-dev-server

        // webpack.config.js
          entry: {
            app: './src/index.js',
            print: './src/print.js'
          },
          devtool: 'inline-source-map',
        +   devServer: {
        +     contentBase: './dist'
        +   },
        ...
        packge.json
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "watch": "webpack --watch",
        + "start": "webpack-dev-server --open",
          "build": "webpack"
        },
        ```