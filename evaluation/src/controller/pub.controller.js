const express=require("express")
const router=express.Router()

const Pub=require("../models/pub.model")

router.post("",async(req,res)=>{
    try {
        const Pub=await Book.create(req.body)

        return res.status(200).send(pub)
    } catch (error) {
        
        return res.status(400).send(error.message)
    }
})

module.exports=router