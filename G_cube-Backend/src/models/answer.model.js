import mongoose, {Schema} from "mongoose";

const answerSchema= new Schema({
    answer:{
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