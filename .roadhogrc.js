const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, ''),
]

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  "theme": "./theme.config.js",
  // 接口代理示例
  "proxy": {
    "/apinew": {
    "target": "http://localhost:8080/api/",
    "changeOrigin": true,
    "pathRewrite": { "^/apinew" : "" }
  },
    "/super": {
      "target": "http://10.0.31.116:8088/",
      "changeOrigin": false,
      "pathRewrite": { "^/super" : "" }
    },

    // "/api/v2": {
    //   "target": "http://192.168.0.110",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api/v2" : "/api/v2" }
    // }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": true}]
      ],
      "devtool": 'cheap-module-source-map',
      "port": 4000
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": true}]
      ]
    }
  },
  "dllPlugin": {
    "exclude": [
      "babel-runtime"
    ],
    "include": [
      "dva/router",
      "dva/saga",
      "dva/fetch",
      "dva",
      "babel-polyfill",
      "dva-loading"
    ]
  }
}
