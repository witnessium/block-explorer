// vue.config.js
module.exports = {
  configureWebpack: {
      entry: ["babel-polyfill", "./src/main.js"]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/css/variables.scss";
          @import "~@/assets/css/functions.scss";
        `
      },
    }
  }
}