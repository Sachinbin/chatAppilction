const { default: mongoose } = require("mongoose");
const logger = require("./logger");

let connectDB = async () => {
    await mongoose.connect('mongodb://0.0.0.0/chat')
    logger.info("DB connected")
}

module.exports = connectDB;