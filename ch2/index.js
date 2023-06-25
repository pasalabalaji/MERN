const fs=require("fs")
const http=require("http")

const server=http.createServer((req,res)=>{
      res.writeHeader(200,"connection successful",{"Content-Type":"html"})
      fs.readFile('index.html',(err,data)=>{
        if (err) throw err;
        res.end(data)
      })
})

server.listen(3000,"localhost")