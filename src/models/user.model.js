const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        passwoed:String,
    },
    {
        timestamps:true
    }
)

let UserModel = mongoose.model("users",userSchema)
module.exports = UserModel;