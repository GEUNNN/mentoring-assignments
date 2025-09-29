const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { DefinePlugin, MiniCssExtractPlugin } = require("webpack");

module.exports = merge(common, {
  mode: "production",
  devtool: "hidden-source-map",
  plugins: [
    new DefinePlugin({
      "process.env.API_URL": JSON.stringify(
        process.env.API_URL || "http://localhost:3000"
      ),
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.APP_PHASE": JSON.stringify(process.env.APP_PHASE || "local"),
    }),
    [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
  ],
});
