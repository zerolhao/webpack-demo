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