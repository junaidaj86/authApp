import UserService from "../services/UserService.js";
class UserController{
    constructor(){

    }
    createUser = async (userBody, res)=>{
        const userService = new UserService();
        userService.createUserService(userBody, res);
    }
}

export default UserController;