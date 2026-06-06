const { default: mongoose } = require("mongoose");

let connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://0.0.0.0/chat')
        console.log("db connected")
    } catch (error) {
        console.log('db Coonection failed');
        
    }
}

module.exports = connectDB;