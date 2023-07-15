const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //Locate entry point : index.js
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // will create bundle.js files which will include all code + depedencies
    //this will inside html run the all react app
    filename: "bundle.js",
    //Client- side routing home page
    publicPath: "/",
  },

  module: {
    // allow us to use modern Javascript and JSX syntax
    rules: [
      {
        //Specify which files is covered by rules
        test: /\.(js|jsx)$/,
        //Exclude from rules
        exclude: /node_modules/,
        //Specify which loader to use
        use: {
          loader: "babel-loader",
          //Options to be passed to loader
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    //read  index.html file + inject auto needed script tags
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  //Stack overflow - start
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 8080,
    historyApiFallback: true, // Make sure  client-side routing works properly
  },

  //Stack overflow - end
};

//------- Copyright & references ---------------
//https://legacy.reactjs.org/docs/create-a-new-react-app.html
//Stack overflow : https://stackoverflow.com/questions/32098076/react-router-cannot-get-except-for-root-url
//https://blog.logrocket.com/versatile-webpack-configurations-react-application/
