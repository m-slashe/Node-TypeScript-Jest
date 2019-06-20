module.exports = {
  mode: 'development',
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
