const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: true,
    host: "localhost",
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 파일에 대해
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
