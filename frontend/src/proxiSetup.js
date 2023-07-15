const { myProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    //Endpoint to proxy
    "/api",
    myProxyMiddleware({
      // connect Node.js  server
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
};
