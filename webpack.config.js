var path = require("path");
var webpack = require("webpack")

module.exports = {
    mode: "none",
    entry: "./src/App.fsproj",
    devServer: {
        contentBase: path.join(__dirname, "./dist")
    },
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}