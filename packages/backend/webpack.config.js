const path = require('path');
const Dotenv = require('dotenv-webpack');
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  // devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('../../'),
    filename: 'server.js',
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      // { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
      new CheckerPlugin(),
      new Dotenv()
  ]
};
