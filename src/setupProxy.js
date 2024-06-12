const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://consensus.hankyung.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};