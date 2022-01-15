import express from 'express';

const homeRoute = express.Router();

homeRoute.get('/', (req, res)=>{
    res.send("Welcome to home page")
});


export default homeRoute;