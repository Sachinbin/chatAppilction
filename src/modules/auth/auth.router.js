const express = require ('express')
const AuthController = require('./auth.controller')

const router = express.Router()
const authController = new AuthController()

router.post('/register',authController.RegisterController.bind(authController))

module.exports = router;