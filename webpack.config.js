/**
 * Created by naimi on 2/9/17.
 */
var path = require("path");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve:{
        alias: {
            Display: __dirname + '/app/components/Display.js',
            Footer: __dirname + '/app/components/Footer.js',
            Header: __dirname + '/app/components/Header.js',
            ListProducts: __dirname + '/app/components/ListProducts.js',
            Wrapper: __dirname + '/app/components/Wrapper.js',
            Product: __dirname + '/app/components/Product.js'
        }
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015","react"]
                }
            }
        ]
    }
};