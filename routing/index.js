const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
      res.setHeader("Content-Type","text/html");
      console.log(req.url)
      if(req.url=="/"){
        res.end("working")
      }
      else if(req.url=="/index"){
        fs.readFile('index.html',(err,data)=>{
            if (err) throw err;
            
            res.end(data)

        })
      }

})


server.listen(3000,"localhost",()=>{
    console.log("server running")
})