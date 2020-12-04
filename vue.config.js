module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api/wm': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        timeout: 60000,
        pathRewrite: { '/api/wm': '' }
      }
    }
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
