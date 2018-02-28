/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpackModule = require('./config/webpack/pro/module');
const resolve = require('./config/webpack/dev/resolve');

module.exports = {

    entry: ['babel-polyfill', __dirname + '/site/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/[name]-[id].[hash:8].bundle.js',
    },
    module: webpackModule,

    resolve: resolve,

    plugins: [
        new CleanPlugin(['dist'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/site/index.html',
        }),
        // new PreloadWebpackPlugin({
        //     rel: 'preload',
        //     include: ['Uc','App']
        // }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            {from: __dirname + '/assets', to: __dirname + '/dist/assets'},
            {from: __dirname + '/site/favicon.ico', to: __dirname + '/dist/favicon.ico'},
        ]),
    ],
};
