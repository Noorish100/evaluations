const app=require("../index")


const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
    email:{type:String,unique:true},
    profileImages:{type:String,required:false},

},
{
    timestamps:true,
    versionkey:false
})

const User=mongoose.model("user",userSchema)

module.exports=User