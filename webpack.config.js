const port=process.env.PORT || 8080;
const path =require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports={
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ],

    devServer:{
        host:'localhost',
        port:port,
        historyApiFallback:true,
        open:true
    }
    
}