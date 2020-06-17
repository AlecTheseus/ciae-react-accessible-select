const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: './src/index.js',
    entry: {
        main: ['./src/index.js'],
        app: ['./examples/app.js'],
    },
    output: {
        library: 'UserList',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        // filename: 'index.js'
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'basic.html',
            template: path.resolve(__dirname, 'examples/index.html')
        }),
        // new HTMLWebpackPlugin({
        //     filename: 'link.html',
        //     template: path.resolve(__dirname, 'examples/link/index.html')
        // }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};