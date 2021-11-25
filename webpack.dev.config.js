const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    plugins: [
        new HTMLWebpackPlugin({
            title: "Let's make a menu",
            template: './src/html/index.html',
            minify: false,
            cache: false,
            watch: true,
            alwaysWriteToDisk: true
        }),
        new HTMLWebpackHarddiskPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};