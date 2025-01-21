import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {Query} from '../models/query.model.js';
import mongoose from 'mongoose';

const registerQuery = asyncHandler(async (req, res) => {
    console.log("Incoming request body:", req.body); // Log the incoming request body
    if (!req.body) {
        throw new ApiError(400, 'Request body is missing');
    }
    const { name, email, message } = req.body;
    if([name,email,message].some((field)=>{field?.trim()===""})){
        throw new ApiError(400,'Please fill all fields');
    }
    //can add a check to c if the user already exsists by user or email. but not required to check
    const query= await Query.create({
        name,
        email,
        message
    })
    const createdQuery= await  Query.findById(query._id);
    if(!createdQuery){
        throw new ApiError(504,'Error in registering a query');
    }
    return res.status(200)
    .json(new ApiResponse(200,createdQuery,"Query registered successfully"));
})

export {registerQuery}; 