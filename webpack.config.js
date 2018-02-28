/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpackModule = require('./config/webpack/dev/module');
const resolve = require('./config/webpack/dev/resolve');

module.exports = {

    entry: ['babel-polyfill', __dirname + '/site/index.js'],
    output: {
        path: __dirname + '/public',
        filename: 'js/[name].[hash:8].bundle.js',
        chunkFilename: 'js/[name]-[id].[hash:8].bundle.js',
    },

    module: webpackModule,

    resolve: resolve,

    plugins: [
        new CleanPlugin(['public'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/assets', to: __dirname + '/public/assets'},
            {from: __dirname + '/site/favicon.ico', to: __dirname + '/public/favicon.ico'},
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
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
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        host: "0.0.0.0",
        port: '8000',
        historyApiFallback: true,
        inline: true,
        hot: true,
        hotOnly: true,
    },
};
