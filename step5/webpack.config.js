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
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {modules: true}},]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [require('autoprefixer')];
                            },
                        },
                    },
                    'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ['url-loader'],
            },
        ]
    }
};
