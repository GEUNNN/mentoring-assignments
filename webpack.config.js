const path = require("path");

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
        use: ["style-loader", "css-loader"], // 로더는 배열의 역순으로 적용됩니다.
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"), // 정적 파일을 제공할 디렉토리 설정
    compress: true,
    port: 3000, // 개발 서버 포트 설정
    open: true, // 서버 시작 시 브라우저 자동 열기
    hot: true, // 핫 모듈 교체 활성화
    historyApiFallback: true,
  },
  mode: "development", // 개발 모드 설정
};
