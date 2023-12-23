//  import required modules from nodejs 
const http=require('http');
const fs=require('fs');
const path=require('path')

// create the server 
const server = http.createServer(function(req, res){
    res.setHeader("content-type", "text/html");
    if(req.url=="/"){
        fs.readdir(__dirname, (err, data)=>{
                // res.end(JSON.stringify(data))

                data.forEach((ele)=>{
                        // res.end(ele)     // it has work only get the request from data and terminate its first iteratio, so we use res.write()
                        // res.write(ele)   // show in li tag
                        let element=` &#128193<li><a href="${ele}">${ele}</a></li>`
                        res.write(element)
                })
                res.end()
        })
    }
    else {
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
            }
            
        }
        
        res.end()
     
    }
   
   
        })
    
   
    // server()



server.listen(8080,()=>{
    console.log("listening to port 8080")
})

// export the server 

