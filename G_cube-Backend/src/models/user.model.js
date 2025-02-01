import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        index:true
    },
    email:{
        type:String,
        trim:true,
        index:true,
        unique:true
    },
    srn:{
        type:String,
        index:true,
        unique:true,
        trim:true
    },
    answer:[
        {
            type:Schema.Types.ObjectId,
            ref:"Answer"
        }
    ]
},{
    timestamps:true
})

export const User = mongoose.model("User",userSchema);