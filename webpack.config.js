const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

var config = {
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
};

var lib = Object.assign({}, config, {
    entry: './src/index.js',
	output: {
        library: 'UserList',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
    },
});
var example = Object.assign({}, config,{
    entry: {
        main: ['./src/index.js'],
        app: ['./examples/app.js'],
    },
	output: {
        library: 'UserList',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'basic.html',
            template: path.resolve(__dirname, 'examples/index.html')
        }),
    ]
});

module.exports = [
    lib, example,       
];