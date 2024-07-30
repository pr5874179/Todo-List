import express from 'express';
import{ PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRouter from './routes/bookRoutes.js';
import cors from 'cors';
const app = express();
//middleware for parsing request body
app.use(express.json());

//
//
app.use(cors());

//app.use(
  //  cors({
    //origin:'http://localhost:3000',
   // methods:['GET','POST','PUT','DELETE'],
   // allowedHeaders:['Content-Type'],
   // })
//);
app.get('/',(request, response)=>{
console.log(request)
return response.status(200).send('Welcome to Mern stack Tutorial ');

});
//Save a new book

app.use('/books',booksRouter);

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App id listening to port: ${PORT}`);
        });


})
.catch((error)=>{
    console.log(error);

});