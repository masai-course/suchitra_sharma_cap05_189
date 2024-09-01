import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    "name":{type:String, required:true},
    "email":{type:String, required:true},
    "age":{type:Number},
    "contact":{type:Number},
    "password":{type:String},
    "confirmPassword":{type:String},
    "role":{type:String}

})

const UserModel=mongoose.model('user', userSchema)

export default UserModel