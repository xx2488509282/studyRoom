const Router =require('koa-router')
const axios =require('axios')

const user =require('../model/user')

const router=new Router({prefix:'/api/user'})


router.post('/send_code',async(ctx)=>{
    ctx.verifyParams({
        code:'string',
    })
    let code=ctx.request.body.code
    console.log(code);
})

module.exports=router