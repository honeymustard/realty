module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry: ['whatwg-fetch', './src/main.js'],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};