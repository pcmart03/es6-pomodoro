var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoprefix = require('less-plugin-autoprefix');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["uglify", "babel-loader"]
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }],
        lessLoader: {
            lessPlugins: [
                new LessPluginAutoprefix({
                    browsers: "last 2 versions"
                }),
                new LessPluginCleanCSS({
                    advanced: true
                })
            ]
        }
    }
};