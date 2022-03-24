
const mongoose=require("mongoose")

const commentSchema=mongoose.Schema({
    body:{type:String},
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    book_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }
},
{
    timestamps:true,
    versionkey:false
})

const Comment=mongoose.model("user",commentSchema)

module.exports=Comment