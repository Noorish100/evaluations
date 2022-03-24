const express=require("express")
const router=express.Router()
const {body,validatinResult}=require("express-validator")

const User=require("../models/user.model")

router.post("",body("firstName").not().isEmpty().custom((value)=>{
    if(value.length<3||value.length>30){
      throw new Error("name length should be between 3 to 30")
    }
    else {
        return true
    }
}),body("lastName").custom((value)=>{
    if(value.length<3||value.length>30){
        throw new Error("lastname length should be between 3 to 30")
      }
      else {
          return true
      }
}),body("age").not().isEmpty().custom((value)=>{
    if(value<1||value>150){
      throw new Error("age should be between 1 to 150")
    }
    else {
        return true
    }
    }),body("email").not().isEmpty(),async(req,res)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    const user=await User.create(req.body)

   return res.status(201).send(user)
    
} catch (error) {
    
   return res.status(201).send(error.message)
}
})

module.exports=router