module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
          additionalData: `@import "@/assets/sass/variables.scss";`
        }
    }
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }]
    }
  }
}
