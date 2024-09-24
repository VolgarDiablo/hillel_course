const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/js/*.json", to: "./js/[name][ext]" },
        { from: "./src/css", to: "./css" },
        { from: "./src/img", to: "./img" },
        // { from: "./src/fonts", to: "./fonts" },
      ],
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    compress: true,
    port: 9000,
  },
};
