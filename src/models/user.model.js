const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        passwoed: String,
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

let UserModel = mongoose.model("users", userSchema)
module.exports = UserModel;