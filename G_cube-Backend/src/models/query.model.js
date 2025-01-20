import mongoose, {Schema} from 'mongoose';

const querySchema= new Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true  //make username or email unique in future when something advances
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
    }
},{
    timestamps:true, 
})

export const Query=mongoose.model('Query',querySchema);