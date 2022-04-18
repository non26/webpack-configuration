const path = require("path");

module.exports = {
    entry: {
        main: "./static/js/entry.js"
    },
    output: {
        filename: "[name].bunddle.js",
        path: path.resolve(__dirname, "buddled")
    },
    module: {
        rules: [{
                test: /\.(svg|jpg)$/,
                use: {
                    loader: "file-loader",
                    option: {
                        name: "[name]-buddled.[ext]",
                        outputPath: "buddle-imgs"
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }

}