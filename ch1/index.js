const http=require("http")

const server=http.createServer((req,res)=>{
      res.setHeader("Content-Type","text");
      res.end("working3")
})


server.listen(3000,"localhost",()=>{
    console.log("server running")
})