const { StatusCodes } = require("http-status-codes");
const AuthService = require("./auth.service");
const { buildSuccessResponse } = require("../../shared/utils/buildSuccessResponse");

module.exports = class AuthController{
    constructor(){
        this.authService = new AuthService()
    }

    async RegisterController(req,res) {
        let user = await this.authService.RegisterService(req.body)

        return buildSuccessResponse(
            res,
            "User registered successfully",
            StatusCodes.CREATED,
            user
        );

    }
}