const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      //绝对路径,自动引入styles文件
      patterns: [
        path.join(__dirname,'./src/assets/styles/variables.less'),
        path.join(__dirname,'./src/assets/styles/mixins.less')
      ]
    }
  }
})
 