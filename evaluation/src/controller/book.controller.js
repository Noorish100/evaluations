const express=require("express")
const router=express.Router()

const Book=require("../models/book.model")

router.post("",async(req,res)=>{
    try {
        const book=await Book.create(req.body)

        return res.status(200).send(book)
    } catch (error) {
        
        return res.status(400).send(error.message)
    }
})

module.exports=router