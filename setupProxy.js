const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://limeloans.runaloan.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/ralapi-leads/lead',
      },
    })
  );
};
