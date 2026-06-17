const AuthRepo = require("../../repository/auth.repository");
const { ValidationError } = require("../../shared/error/custom.error");

module.exports = class AuthService {
    constructor (){
        this.authRepo = new AuthRepo()
    }

    async RegisterService(data){
        // console.log(data);
        
        if(!data.name||!data.email || !data.password){
            throw new ValidationError('All field are required')
        }

        let isUserExist = await this.authRepo.findByEmail(data.email)
        console.log(isUserExist);
        
        if(isUserExist){
            throw new ValidationError('user already exist')
        }

        let user = await this.authRepo.Create({
            name:data.name,
            email:data.email,
            password:data.password
        })

        return {user}
    }
}