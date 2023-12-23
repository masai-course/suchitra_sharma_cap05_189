const http=require('http')
const fs=require('fs')

const server=http.createServer((req, res)=>{
    // console.log("hi")
   
    if(req.url=="/"){
        // const htmlText=res.setHeader("welcome")
        const data=fs.readFile("","utf-8",()=>{
            const data=res.setHeader("content", "text/html")
         console.log("welcome to the homepage")
         
        })
        console.log("welcome")
        res.end()
    }
    else if(req.url=="/gencount"){
        console.log("count")
    }
    else if(req.url=="/addnew"){
        console.log("update data")
    }
    else if(req.url=="/people"){
        console.log("people data")
    }
    else if(req.url=="/address"){
        console.log("address with timestamp of people")
    }
   
})


server.listen(8080,(req, res)=>{
    console.log("listening to 8080")
})














// Do not forget to export the server.
// e.g => module.exports = server;
