const express=require("express")

const app=express()

app.use(express.json())
const usercontroll=require("./controller/user.controller")
const commentcontroll=require("./controller/comment.controller")
const bookcontroll=require("./controller/book.controller")


app.use("/user",usercontroll)
app.use("/comment",commentcontroll)
app.use("/book",bookcontroll)

module.exports=app