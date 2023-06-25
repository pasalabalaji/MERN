const http=require("http")

const server=http.createServer((req,res)=>{
        // res.statusCode=200
        // res.statusMessage="good"
        // res.setHeader("Content-Type","text");
        res.writeHead(202,"connection",{"Content-Type":"plain/text"})
        res.end("working3")
})


server.listen(3000,"localhost",()=>{
    console.log("server running")
})
