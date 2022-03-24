const express=require("express")

const mongoose=require("mongoose")
const app=express()

app.use(express.json())

const connect=()=>{
    return mongoose.connect("mongodb+srv://noorish:noorishes123@cluster0.fdjfa.mongodb.net/test")
}

const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    middlename:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true,default:"female"},
    type:{type:String,required:true,default:"customer"},
},
{
    versionKey:false,
    timestamps:true
})

  const User= mongoose.model("user",userSchema)

  
const masteracSchema= new mongoose.Schema({
    balance:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"User",required:true},
    manager_id:{type:Number,required:true},
        branch_id:{type:mongoose.Schema.Types.ObjectId,
            ref:"Branch",required:true},
            user_id:{type:mongoose.Schema.Types.ObjectId,
                ref:"user",required:true},


 
},
{
    versionKey:false,
    timestamps:true
})

  const Master=mongoose.model("master",masteracSchema)


  const fixedacSchema= new mongoose.Schema({

    account_numb:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interest_rate:{type:Number,required:true},
    start_date:{type:Number,required:true},
    maturity_date:{type:Number,required:true},

     user_id:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true},
  
},
{
    versionKey:false,
    timestamps:true
})

  const Fixed=mongoose.model("fixed",fixedacSchema)


  const savingacSchema=new mongoose.Schema({

    account_numb:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interest_rate:{type:Number,required:true},
   

 
    user_id:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true},
  

 
},
{
    versionKey:false,
    timestamps:true
})

  const Saving=mongoose.model("saving",savingacSchema)

  

  const branchdetailSchema= new mongoose.Schema({

    name:{type:String,required:true,unique:true},
    address:{type:String,required:true},
    IFSC:{type:Number,required:true},
    MICR:{type:Number,required:true},
 

 
    manager_id:{type:mongoose.Schema.Types.ObjectId,
        ref:"Manager",required:true},
  

 
},
{
    versionKey:false,
    timestamps:true
})

  const Branch=mongoose.model("branch",branchdetailSchema)


app.get("/master",async(req,res)=>{
   try{
    const master=await Master.find().populate().lean().exec()
  return  res.status(200).send(master)

   }
   catch(err){

    return res.status(404).send(err.message)
 }
})


app.get("/user",async(req,res)=>{
    try{
     const user=await User.find().lean().exec()
   return  res.status(200).send(user)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
 }
 
 })


 
app.get("/master/:id",async(req,res)=>{
    try{
     const master=await Master.findById().populate({path:"user_id"}).lean().exec()
   return  res.status(200).send(master)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
 }
 
 })
  
app.get("/master/:id",async(req,res)=>{
    try{
     const master=await Master.findById().populate({path:"user_id",select:["account_numb","balance"]}).lean().exec()
   return  res.status(200).send(master)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
 }
 
 })

app.post("/user",async(req,res)=>{
    try{
     const user=await User.create(req.body)
   return  res.status(200).send(user)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
    }
 })

 app.post("/fixed",async(req,res)=>{
    try{
     const fixed=await Fixed.create(req.body)
   return  res.status(200).send(fixed)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
    }
 })
// update fixed account balance
 app.patch("/fixed/:id",async(req,res)=>{
    try{
     const fixed=await Fixed.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
   return  res.status(200).send(fixed)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
    }
 })

 // update saving account balance
 app.patch("/saving/:id",async(req,res)=>{
    try{
        const saving=await Saving.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
   return  res.status(200).send(saving)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
    }
 })
 app.post("/saving",async(req,res)=>{
    try{
     const saving=await Saving.create(req.body)
   return  res.status(200).send(saving)
 
    }
    catch(err){
 
     return res.status(404).send(err.message)
    }
 })


app.listen(4000,async()=>{
    console.log("listeing at 4000")
    try{

        await connect()
    }
    catch(err){
        return (err.message)

    }
  
})
