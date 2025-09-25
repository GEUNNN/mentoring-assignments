const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // 엔트리 포인트 설정
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // 번들된 파일의 이름
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // import 시 확장자를 생략할 수 있게 해줍니다.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .js 또는 .jsx 확장자를 가진 파일에 대해
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Babel 로더를 사용하여 ES6+와 JSX 문법을 변환합니다.
        },
      },
      {
        test: /\.css$/, // .css 파일에 대해
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 파일 경로
      filename: "index.html", // 생성될 HTML 파일 이름
      inject: "body", // 스크립트를 body 태그 끝에 삽입
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })]
      : []),
    new Dotenv({
      path: `./.env.${process.env.NODE_ENV}`, // 환경별 .env 파일 경로
    }),
    process.env.NODE_ENV !== "production" &&
      require.resolve("react-refresh/babel"),
  ].filter(Boolean),
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
  },
};
