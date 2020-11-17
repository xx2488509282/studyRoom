const mongoose=require('mongoose')

const User=mongoose.model('user',{
    username:String,
    open_id:String
})