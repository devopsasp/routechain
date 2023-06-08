import express from 'express'
const app=express()
app.get("/sample1",(req,res,next)=>{
    console.log("first function")
    next()
},(req,res)=>{
   console.log("second function")
   res.send("<h1>Hello World</h1>")
})

app.listen(5050,()=>{
    console.log("server listenenin")
})

app.get("/sample2",[func1,func2,func3])
function func1(req,res,next)
{
    console.log("first")
    next()
}
function func2(req,res,next){
    console.log("second")
    next()
}
function func3(req,res,next){
    console.log("third")
    res.send("<h1>Hello User</h1>")
}
