// 作为配置文件，直接导出配置对象即可
module.exports = {
  devServer: {
    proxy: {
      "/data": {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/data": ""
        }
      }
    }
  },
  chainWebpack: config => {
    //close eslint
    config.module.rules.delete("eslint");
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false
};
