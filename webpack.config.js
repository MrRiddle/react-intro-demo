var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, './src/index'),
        intro: path.join(__dirname, './src/intro')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './index.html'),
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'intro.html',
            template: path.join(__dirname, './index.html'),
            chunks: ['intro']
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        "react": 'React',
        'react-dom': 'ReactDOM'
    }
}