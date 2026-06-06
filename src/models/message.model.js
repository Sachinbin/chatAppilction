const { default: mongoose } = require("mongoose");

let messageSchema = new mongoose.Schema(
    {
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
         receiver:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        text:String,
    },
    {
        timestamps:true
    }
)
const MessageModel = mongoose.model('message',messageSchema)
module.exports = MessageModel