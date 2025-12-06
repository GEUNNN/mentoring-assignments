module.exports = {
  plugins: [
    "babel-plugin-react-compiler", // must run first!
    // ... other plugins
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.22",
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
};
