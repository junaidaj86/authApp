import express from 'express';

const userRoutes = express.Router();

userRoutes.post('/register', (req, res)=>{
    res.send("Register page")
});

userRoutes.post('/login', (req, res)=>{
    res.send("Login page")
});

userRoutes.post('/logout', (req, res)=>{
    res.send("Log out page")
})

export default userRoutes;