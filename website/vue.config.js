const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  outputDir: 'dist',

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // Configuration for Vuetify plugin options
    }
  },

  pages: {
    index: 'src/pages/website/main.js',
  },

  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' },
      ]
    }
  },
})
