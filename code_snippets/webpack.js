var path = require('path');
var debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/client.js",
    resolve: {
		extensions: ['', '.js', '.cjsx', '.coffee']
	},
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /(node_modules|code_snippets)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'add-module-exports']
                }
            },
            { test: /\.css$/, loaders: ['style', 'css']},
            { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
            { test: /\.coffee$/, loader: 'coffee' }
        ]
    },
    output: {
        filename: "./client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
}
