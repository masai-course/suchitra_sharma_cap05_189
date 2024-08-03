
const express=require("express")
const morgan=require("morgan")
const fs=require('fs')
const path=require('path')

const server=express()
const PORT=5005

// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });


server.use(morgan((tokens, req, res) => {

    
    return [
      tokens.method(req, res),"\n",
      tokens.url(req, res),"\n",
      tokens.status(req, res),"\n",
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms', "\n",
    ].join(' ')

 
  }),


);

  server.use(morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),"\n",
      tokens.url(req, res),"\n",
      tokens.status(req, res),"\n",
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms', "\n",
    ]
  }));

server.get("/", (req, res)=>{
    console.log("get is running")
       const content=`\n The request mathod is ${req.method}, url is ${req.url}, status is 
    ${res.status(200)}, time is ${Date()} `

    // fs.appendFileSync("append.txt", content)
    fs.appendFileSync(path.join(__dirname, 'append.txt'), content, (err) => {
        if (err) throw err;
      });
    res.send("Getting message successfully")
})

server.post("/add-user", (req, res)=>{
    console.log("Post is running")
    const content=`\n The request mathod is ${req.method}, url is ${req.url}, status is 
    ${res.status(201)}, time is ${Date()} `

    // fs.appendFileSync("append.txt", content)
    fs.appendFileSync(path.join(__dirname, 'append.txt'), content, (err) => {
        if (err) throw err;
      });

    
    res.status(201).send("Posting Success ")
})

server.put("/user/:id", (req, res)=>{
    console.log("Updating is running")
    const content=`\n The request mathod is ${req.method}, url is ${req.url}, status is 
    ${res.status(201)}, time is ${Date()} `

    // fs.appendFileSync("append.txt", content)
    fs.appendFileSync(path.join(__dirname, 'append.txt'), content, (err) => {
        if (err) throw err;
      });
    res.status(201).send("Updating is successfull") 
})

server.delete("/user/:id", (req, res)=>{
    console.log("Deleting is running")
    const content=`\n The request mathod is ${req.method}, url is ${req.url}, status is 
    ${res.status(201)}, time is ${Date()} `

    // fs.appendFileSync("append.txt", content)
    fs.appendFileSync(path.join(__dirname, 'append.txt'), content, (err) => {
        if (err) throw err;
      });
    res.status(201).send("Successfull Deletion") 
})





server.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
})