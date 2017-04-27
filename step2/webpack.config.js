var path = require('path');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    }
};
