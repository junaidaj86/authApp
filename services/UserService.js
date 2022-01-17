import User from '../models/User.js';
import bcrypt from 'bcrypt';
class UserService{
    constructor(){

    }

    createUserService = async (userBody, res)=>{
        try{
            const user = new User(userBody)
            const salt = await bcrypt.genSaltSync(10);
            user.password = await bcrypt.hashSync(user.password, salt)
            const userCreated = await user.save();
            res.status(200).json(userCreated);
        }catch(error){
            res.status(400).json({"error":"failed to register user"});
        }
        
    }
}


export default UserService;