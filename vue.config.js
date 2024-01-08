const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 3050 // 你想要使用的端口号
  },
  transpileDependencies: true
})
  