const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src/index"),
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/resources/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  devtool: process.env.CLIENT_ENV === "local" ? "source-map" : undefined, // we only add this in development mmode
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      favicon: "./src/resources/images/myface.jpg",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV:
        process.env.CLIENT_ENV === "local" || process.env.CLIENT_ENV === "dev"
          ? "development"
          : "production", // development (default), 'production'
      CLIENT_ENV: "local", // local (default), dev, staging, prod
      LOG_LEVEL: "debug", // info, warn, debug
      DEBUG: false,
    }),
  ],
};
