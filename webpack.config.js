const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
module.exports = {
    entry:{
        app:'./app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundel.[hash].js'
    },
    devServer: {
        port: 9000,
        host:"0.0.0.0",
        hot:true,
        historyApiFallback: true,
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use:[{
                loader: 'babel-loader',
                options: {
                  presets: [
                      '@babel/preset-env',
                      '@babel/preset-react'  
                    ],
                    "plugins": ["@babel/plugin-transform-runtime"]
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './index.html'
        }),//html模版插件
    ]
}



