const express=require("express");

const port=3000;
const app=express()

const student=require("./students.js");
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.get("/student",(req,res)=>{
    // console.log(student["name"])
    res.json([student])
})

app.get("/student/num",(req,res)=>{
    // console.log(student["name"])
    res.json([student[num]])
})
app.listen(port,()=>{
    console.log("server running on localhost:3000")
})