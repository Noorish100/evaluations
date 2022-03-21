
const mongoose=require("mongoose")

const pubSchema=mongoose.Schema({
    Name:{type:String},
 

},
{
    timestamps:true,
    versionkey:false
})

const Pub=mongoose.model("user",pubSchema)

module.exports=Pub