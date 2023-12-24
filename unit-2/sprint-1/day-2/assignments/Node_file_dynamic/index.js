const http = require("http");
const fs = require("fs");
const PORT = 7700;
const path=require('path')
const server =http.createServer((req, res)=>{
      console.log(req.url)  
      
      res.setHeader("content-type", "text/html")
      if(req.url=="/"){
        fs.readdir(__dirname, (err, data)=>{
            // res.end(JSON.stringify(data))
            data.forEach((ele)=>{
                //   res.write(ele)
                  let element=`<li><a href="${ele}">${ele}</a></li>`
                 res.write(element)

                })
            res.end()
      })

      }
    
      else{
        // let filePath=path.join(__dirname, req.url)
        // const fileData= fs.readdirSync(filePath, "utf-8")
        let ExactfilePath=path.join(__dirname, req.url)
        let isExactFilePathAvailable=fs.existsSync(ExactfilePath)
        if(isExactFilePathAvailable){

            let isFileLocation=fs.statSync(ExactfilePath).isFile();

            if(isFileLocation){
                const fileData=fs.readFileSync(ExactfilePath, "utf-8")
                res.write(fileData)
            }
            else{
                const folderData=fs.readdirSync(ExactfilePath, "utf-8")
                folderData.forEach((ele)=>{
                    let element=` &#128441<li><a href="${req.url}/${ele}">${ele}</a></li>`
                    res.write(element)
                })
                res.end()
            }
            
        }
    

     }
      

     


    //   res.end("hey there")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
})


// export your server
server.listen(`${PORT}`, ()=>{
    console.log(`Listening to port ${PORT}`)
})