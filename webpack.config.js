const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    externals: [nodeExternals()],
    entry: {
        './index': './src/index.js'
    },
    output: {
        library: 'pokedex-promise-v2',
        libraryTarget: 'umd',
        path: '.',
        filename: '[name].js'
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=es2015'
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ],
        noParse: /node_modules\/json-schema\/lib\/validate\.js/
    }
};
