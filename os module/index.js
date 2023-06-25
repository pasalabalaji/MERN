// const os=require("os")
const url=require("url")
// const events=require("events")
// // console.log(os.platform())
// // console.log(os.arch())
// // console.log(os.cpus())
// // console.log(os.hostname())
// // console.log(os.homedir())
// // console.log(os.freemem())
// // console.log(os.totalmem())

// // const ur=new URL("https://www.youtube.com/watch?v=OPrP_ge9xpE&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=14")
// // console.log(ur.hash)
// // console.log(ur.host)
// // console.log(ur.hostname)
// // console.log(ur.href)
// // console.log(ur.protocol)
// // console.log(ur.search)

// class myEmitter extends events{}

// const obj=new myEmitter();

// obj.on('event',()=>{
//      console.log("event occured")
// })

// obj.emit('event')

const http=require("http")

const server=http.createServer((req,res)=>{
      res.setHeader("Content-Type","application/json")
      const user={
        "name":"user1"
      }
      res.end(JSON.stringify(user))
});

server.listen(3000,"localhost",()=>{
    console.log("server running ")
});
