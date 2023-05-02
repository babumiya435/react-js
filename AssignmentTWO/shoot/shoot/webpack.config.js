var whp =require('html-webpack-plugin');

var template=new whp({
    template:'./src/index.html'
})

var config={
    devtool:'source-map',
    module:{
       rules:[
           {
             'test':/\.js$/,
             'exclude':/node_modules/,
             'loader':'babel-loader'
           },
           {
            'test':/\.css$/,
            'use':['style-loader','css-loader']
           }
       ] 
    },
    plugins:[template]
}


module.exports=config;