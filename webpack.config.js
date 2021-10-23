const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("src", "main.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home | サイト名",
      template: "./src/index.html",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".vue", ".ts", ".js"],
  },
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve('dist'),
    },
  },
};
