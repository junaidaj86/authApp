import express from 'express';


//import routes
import homeRoute from './routes/Home.js';
import userRoutes from './routes/User.js';


//creating an express app

const app = express();

app.use('/', homeRoute);
app.use('/auth', userRoutes);


//constants

const PORT = 3000

const start= ()=>{
    app.listen(3000, ()=>{
        console.log(`App started on port ${PORT}`)
    })
}

start();