const path = require("path");
const miniCssExtractPlugins = require("mini-css-extract-plugin"); // extract css into its own file
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // remove unused bundled file
const htmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/js/entry.js"
    },
    output: {
        filename: "[name].[contenthash].js", // hash for preventing default browser caching.
        path: path.resolve(__dirname, "buddled"),
        assetModuleFilename: "assets/img/[name].[hash][ext]"
    },
    plugins: [
        new miniCssExtractPlugins({
            filename: "[name]-[contenthash].css"
        }),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugins({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(svg|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugins.loader, // extract css into files
                    "css-loader", // turn css into commonJS
                    "sass-loader" // turn sass to css
                ]
            },
            {
                test: /\.html$/,
                use:[
                    "html-loader"
                ]
            }
        ]
    }

}