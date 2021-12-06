const path=require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports={
    mode:"development",
    entry:'./app.js',//入口文件
    output:{
        path:path.join(__dirname,'dist'),//输出文件夹，绝对路径
        filename:'bundle.js'//出口的名字
    },
    devServer:{
    port:8081,//指定服务端口
    static:path.join(__dirname,'dist')
    },
    //文件加载
    module:{
        rules:[//规则列表
            {
                test:/\.css$/,//指定了那种文件需要被处理
                use:[//指定了这个文件需要被那些loader处理,倒叙加载
                    'style-loader',
                    'css-loader'
                ]               
            } 
        ]
   },
   plugins:[
    new UglifyJsPlugin()
   ]  
}