const { defineConfig } = require('@vue/cli-service');
// const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  // 1. 配置方式一： CLI提供的属性
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // publicPath: './',
  // 2. 配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      }),
      require('unplugin-auto-import/webpack')({
        /* options */
      })
    ]
  }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components"
  //   }
  // }
  // 3. 配置方式三：chainWebpack 更多看vue文档
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components');
  // }
});
