const path = require('path');
const slsw = require('serverless-webpack');
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      // { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new CheckerPlugin()
  ]
};
