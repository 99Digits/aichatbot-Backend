const mongoose=require('mongoose')

const chatschema=mongoose.Schema({
    chatinput:String,
    message:String
    // timestamp: { type: Date, default: Date.now },
    
})

const chat=mongoose.model("chats",chatschema)
module.exports=chat