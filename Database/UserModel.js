import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },    
    email:{
        type:String,
        required:true,
    },       
    mobile:{
        type:Number,
        required:true, 
    },
    picture:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true, 
    }
});

const User =  mongoose.model('User',schema);
export default User;