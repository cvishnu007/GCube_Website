import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { Answer } from '../models/answer.model.js';

const registerAnswer=asyncHandler(async(req,res)=>{
    const {answer,question}=req.body;
    if(!answer|| !question){
        throw new ApiError(400,"Answer or question was not provided");
    }
    const user=req.user?._id;
    if(!user){
        throw new ApiError(400,"User is required");
    }
    const answerDoc=await Answer.create({answer,user,question});
    const fetchedAnswer= await Answer.findById(answerDoc._id);
    if(!fetchedAnswer){
        throw new ApiError(504,"Error in registering answer");
    }
    await User.findByIdAndUpdate(
        user,
        {$push:{answer:answerDoc._id}},
        {new:true}
    )
    return res.status(201)
    .json(new ApiResponse(201,fetchedAnswer,"Answer registered successfully"));
})

export {
    registerAnswer
}