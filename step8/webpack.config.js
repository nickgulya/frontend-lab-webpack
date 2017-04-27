var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'), // New line
    devServer: {
        contentBase: path.resolve(__dirname, 'src'), // New line
    },
    entry: {
        index: './js/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // Changed to dist/js/
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: 'css-loader', options: {modules: true}},]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [require('autoprefixer')];
                                },
                            },
                        },
                        'sass-loader']
                })
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                // use: ['file-loader'],
                use: [{
                    loader: 'file-loader',
                    query: {
                        useRelativePath: process.env.NODE_ENV === "production",
                    }
                }],
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([
            {from: 'assets/**/*'},
        ]),

        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index.html',
            chunks: ['index']
        })
    ]
};
