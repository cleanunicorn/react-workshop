var webpack = require('webpack');


module.exports = {
    entry: './js/main.js',
    output: {
        path: './js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
}
