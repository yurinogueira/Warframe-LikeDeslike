const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "src"),
    entry: {
        fontawesome: "./fontawesome/fontawesome.js",
        bootstrap: "./bootstrap/bootstrap.js",
        jquery: "./jquery/jquery.js",
        app: "./app/index.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: "./dist",
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            chunks: ["fontawesome", "jquery", "bootstrap", "app"]
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "images",
                    to: "images"
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    devtool: "source-map",
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        }
    }
}
