import {app} from './app.js';
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import connectDB from './db/index.js';
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is listening at port ${process.env.PORT}`)
    })
    app.on("error",()=>{
        console.log("Error occured in running server: ",error);
        throw error;
    })
})
.catch((error)=>{
    console.log("Error in MongoDB connection: ",error);
})