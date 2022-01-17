import express from 'express';
import bodyParser from 'body-parser';


//import routes
import homeRoute from './routes/Home.js';
import userRoutes from './routes/User.js';
import connectDB from './utils/Database/connection.js';


//creating an express app

const app = express();

app.use(bodyParser.json())

app.use('/', homeRoute);
app.use('/auth', userRoutes);


//constants

const PORT = 3000

const start= async ()=>{
    const dbString = "mongodb+srv://junaid:junaid@cluster0.hqabb.mongodb.net/AuthDB?retryWrites=true&w=majority"
    await connectDB(dbString);
    app.listen(3000, ()=>{
        console.log(`App started on port ${PORT}`)
    })
}

start(); 