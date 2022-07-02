const path = require('path');
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
// const CopyWebpackPlugin = require('copy-webpack-plugin');
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'app/bundle'),
        filename: 'bundle.[hash].js',
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, '../src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/')
        },
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: '**/*',
        //             context: path.resolve(__dirname, 'src', 'assets'),
        //             to: './assets',
        //         },
        //     ],
        // }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[hash].css',
        }),
    ],
};
