var path = require('path');

module.exports = {
    context: path.join(__dirname, "client"),
    entry: "./js/client.js",
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'add-module-exports']
                }
            }
        ]
    },
    output: {
        filename: "./client/client.min.js"
    }
}
