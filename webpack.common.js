const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Dotenv = require("dotenv-webpack");
const { DefinePlugin } = require("webpack");

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
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i, // Added webp and ico
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 파일 경로
      filename: "index.html", // 생성될 HTML 파일 이름
      inject: "body", // 스크립트를 body 태그 끝에 삽입
    }),
    new Dotenv({
      path: `./.env.${process.env.NODE_ENV}`, // 환경별 .env 파일 경로
    }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.APP_PHASE": JSON.stringify(process.env.APP_PHASE || "local"),
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
  },
};
