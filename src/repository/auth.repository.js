const UserModel = require("../models/user.model");

module.exports = class AuthRepo {
    async Create(payload) {
        return await UserModel.create(payload)
    }

    async FindById(id) {
        return await UserModel.findById(id)
    }
    async findByEmail(email) {
        return await UserModel.findOne({ email, isDeleted: false }).lean();
    }
    async deleteById(id) {
        return await UserModel
            .findOneAndUpdate(
                { _id: id, isDeleted: false },
                { isDeleted: true },
                { new: true },
            )
            .select("-password")
            .lean();
    }
}