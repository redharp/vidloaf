const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve('../../', 'web'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        plugins: [new TsConfigPathsPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ForkTsCheckerPlugin(),
        new HardSourcePlugin(),
    ]
};
