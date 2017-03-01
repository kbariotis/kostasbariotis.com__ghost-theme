'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src/js',
    entry: {
        app: './app.js',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        'css-loader',
                        { loader: 'sass-loader', options: { modules: true } }
                    ]
                })
            },
            {
                test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'js/[name].bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            jquery: 'jquery/src/jquery'
        }
    },
    devServer: {
        contentBase: __dirname,
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ]
};
