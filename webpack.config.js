const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.join(__dirname, 'src', 'app-client.js'),
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader'
            },
            {
                test: /\.eot$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};
