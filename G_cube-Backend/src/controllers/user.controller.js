import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import mongoose from 'mongoose';

const registerUser= asyncHandler(async(req,res)=>{
    const {username,srn,branch,semester,contactNo,email}=req.body;
    if([username,srn,branch,semester,contactNo,email].some((field)=>field?.trim()==="")){
        return new ApiError(400,"Please fill all the fields");
    }
    //comment below code if u don't want same person to send multiple requests
    const exsistingUser= await User.findOne({
        $or:[{srn},{email}]
    });
    if(exsistingUser){
        throw new ApiError(401,"The user has already signed by the same email or SRN");
    }
    //only remove till here
    const someUser= await User.create({
        username,
        srn,
        branch,
        semester,
        contactNo,
    })
    const createdUser= await User.findById(someUser._id);
    if(!createdUser){
        return new ApiError(504,"Some error occured in user registration");
    }
    return res.status(201)
    .json(new ApiResponse(201,createdUser,"Successful user registration"));
})

export {
    registerUser
}