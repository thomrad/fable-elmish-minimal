var path = require("path");

module.exports = {
    mode: "development",
    entry: "./public/App.js",
    output: {
        path: path.join(__dirname, "./public"),
        filename: "App.js",
    },
    devServer: {
        contentBase: "./public",
        port: 8080
    }
}