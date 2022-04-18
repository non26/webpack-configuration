const path = require("path");
const miniCssExtractPlugins = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./static/js/entry.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "buddled")
    },
    plugins: [
        new miniCssExtractPlugins({
            filename: "[name]-[contenthash].css"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.(svg|jpg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[contenthash].[ext]",
                        outputPath: "buddle-imgs"
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugins.loader, // extract css into files
                    "css-loader", // turn css into commonJS
                    "sass-loader" // turn sass to css
                ]
            }
        ]
    }

}