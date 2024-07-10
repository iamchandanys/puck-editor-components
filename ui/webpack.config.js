const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production", // Set to 'development' or 'none' as needed
  entry: {
    index: "./src/app/components/index.ts",
    PuckConfig: "./src/app/components/PuckConfig.tsx",
    DefaultFeatureList: "./src/app/components/DefaultFeatureList.tsx",
    FeaturesListCard: "./src/app/components/FeaturesListCard.tsx",
    VisualImageWithHeading: "./src/app/components/VisualImageWithHeading.tsx",
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
        test: /\.(ts|tsx)$/,
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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: [nodeExternals()],
};
