
const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    Like:{type:Number},
    content:{type:String},
    coverimage:{type:String,required:false},
    pub_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"pub"
    },
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},
{
    timestamps:true,
    versionkey:false
})

const Book=mongoose.model("user",bookSchema)

module.exports=Book