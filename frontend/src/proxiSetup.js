const { myProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    //==>Endpoint to proxy
    "/api",
    myProxyMiddleware({
      // ==> connect Node.js  server
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};

//------- Copyright & references ---------------
//https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347
//https://blog.logrocket.com/why-you-should-use-proxy-server-create-react-app/
