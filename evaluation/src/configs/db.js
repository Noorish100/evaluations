const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://noorish:noorishes123@cluster0.ihmzw.mongodb.net/evaluation?retryWrites=true&w=majority")
}

module.exports=connect