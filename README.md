# webpack-demo
1. 安装和基础构建
2. 资源管理([配置](https://webpack.docschina.org/guides/asset-management))
    - 加载css `npm install --save-dev style-loader css-loader`
    - 加载图片['npm install --save-dev file-loader'](https://webpack.docschina.org/loaders/file-loader/)
    - 使用`url-loader`加载图片 [`npm install --save-dev url-loader`](https://webpack.docschina.org/loaders/url-loader)
        + `url-loader`类似`file-loader`，但在文件大小（单位 byte）低于指定的限制`limit`时，可以返回一个 DataURL。