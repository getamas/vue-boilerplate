const appConfig = require('./src/app/app.config')

module.exports = {
  chainWebpack(config) {
    config.set('name', appConfig.title)
  },
  css: {
    sourceMap: true
  }
}
