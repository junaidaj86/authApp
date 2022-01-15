import express from 'express';

//creating an express app

const app = express();


//constants

const PORT = 3000

const start= ()=>{
    app.listen(3000, ()=>{
        console.log(`App started on port ${PORT}`)
    })
}

start();