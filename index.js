const express=require("express")
const app=express()


app.get("/home",(req,res)=>{
    res.json({name:"bhavyajain"}
    )
})
app.get("/en",(req,res)=>{
    res.json({
       age:23,
       class:"sybscit",
        roll_no:18
    })
})





app.listen(5000,()=>{
    console.log("connected")
})