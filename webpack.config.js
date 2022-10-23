/* eslint-disable no-undef */
// eslint-disable-next-line
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    roll: "./src/scripts/roll.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
