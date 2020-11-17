const http =require('http')

const app=require('./app')

const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/StudyRoom",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(error)=>{
    if(error){
        console.log('数据库连接失败');
        console.log(error);
    }else{
        console.log('数据库连接成功');
        const serve=http.createServer(app.callback());

        serve.on('error',(error)=>{
        console.log('服务器错误');
        console.log(error);
        })
        serve.listen(3000,'localhost',()=>{
            console.log('http://localhost:3000');
        })

    }
})




