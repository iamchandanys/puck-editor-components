const path = require("path");

module.exports = {
  mode: "production", // Set to 'development' or 'none' as needed
  entry: {
    index: "./src/app/components/index.ts",
    PuckConfig: "./src/app/components/PuckConfig.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
