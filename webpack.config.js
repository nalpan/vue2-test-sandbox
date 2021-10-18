const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve("src", "main.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
