import express from 'express';
import UserController from '../controllers/UserController.js';

const userRoutes = express.Router();

userRoutes.post('/register', (req, res)=>{
    const userController = new UserController();
    userController.createUser(req.body, res);
});

userRoutes.post('/login', (req, res)=>{
    res.send("Login page")
});

userRoutes.post('/logout', (req, res)=>{
    res.send("Log out page")
})

export default userRoutes;