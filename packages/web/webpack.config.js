const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve('../../', 'dist/web')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CheckerPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: false,
    contentBase: path.join(__dirname, 'dist')
  }
}
