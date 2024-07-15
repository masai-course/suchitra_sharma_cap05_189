
const http=require('http')
const fs=require('fs')
const path=require('path')

const server=http.createServer((req, res)=>{
        if(req.url=="/" )
            {
                let data=fs.readdirSync("./", "utf-8")

                console.log(data)
                res.writeHead(200, 
                    { 'Content-Type': 'text/html'})
                data.forEach((ele, i)=>{
                        console.log(ele);
                        // res.write(`<h3>${ele}</h3>`)
                        res.write(`<li>
                            <a href=${ele}>${ele}</a>
                            </li>`)
                })

                res.end()
            }   
           else if(req.url!="/favicon.ico"){
           let check=fs.statSync(`.${req.url}`).isDirectory()
        //    console.log(`check===${check}`)
        if(check==false)
        {
            let data=fs.readFileSync(`.${req.url}`, "utf-8")
            res.end(data)
        }
        else{
            let data=fs.readdirSync(`.${req.url}`, "utf-8")
           res.writeHead(200,{
                'Content-Type':'text/html'
           })
           data.forEach((ele,i)=>{
                res.write(`<li><a href=${req.url}/${ele}>${ele}</a></li>`)
           })


        }


           }     


})


server.listen(8000, ()=>{
    console.log("Server is running on Port 8000");
})