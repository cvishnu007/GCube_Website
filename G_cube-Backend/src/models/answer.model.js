import mongoose, {Schema} from "mongoose";

const answerSchema= new Schema({
    ans:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

export const Answer=mongoose.model('Answer',answerSchema);