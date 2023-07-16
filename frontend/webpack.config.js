const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

 

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
};

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
//Stack overflow : https://stackoverflow.com/questions/32098076/react-router-cannot-get-except-for-root-url
//https://blog.logrocket.com/versatile-webpack-configurations-react-application/
