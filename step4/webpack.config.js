var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'), // New line
    devServer: {
        contentBase: path.resolve(__dirname, 'src'), // New line
    },
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js'), // Changed to dist/js/
        publicPath: 'dist',
    }
};
