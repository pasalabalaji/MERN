const exp=require("express")
const app=exp()
const port=3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log("server is running...")
})
