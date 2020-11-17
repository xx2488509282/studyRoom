const koa=require('koa');
const error=require('koa-json-error')
const parameter =require('koa-parameter')
const bodyparser =require('koa-bodyparser')
const app=new koa()

const userRouter=require('./routers/userRouter')

//解析参数
app.use(bodyparser())

// 处理错误
app.use(
    error({
      postFormat(error, { stack, ...rest }) {
        return rest;
      },
   })
);

//参数验证
parameter(app)

app.use(userRouter.routes()).use(userRouter.allowedMethods())

module.exports=app