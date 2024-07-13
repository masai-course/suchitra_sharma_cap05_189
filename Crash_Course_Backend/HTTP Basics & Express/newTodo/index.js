const express=require("express")
const fs=require('fs')

const server=express()

server.use(express.json())


server.get("/todo", (req, res)=>{

        // res.send("welcome to the todo list")
        let data=fs.readFileSync("db.json", "utf-8")
        res.send(data)

})

server.post("/todo", (req, res)=>{
    let data=req.body
    console.log(data)

    const todoData=fs.readFileSync("./db.json", "utf-8")        // firstly read the data using fs module
    console.log(todoData)

    const parsedData=JSON.parse(todoData)                       // data will be posted as object method
    console.log(parsedData)

    parsedData.todos.push(data)                                 // push the new task to old task (old task+new task)
    console.log(parsedData)

    fs.writeFileSync("./db.json", JSON.stringify(parsedData))   // write the new task 

    res.send("Data successfully added")



})

server.patch("/todo", (req, res)=>{
      
    const todoData=fs.readFileSync("./db.json", "utf-8")   
    // console.log(todoData)

    const parsedData=JSON.parse(todoData)                       // data will be posted as object method
    // console.log(parsedData.todos)
    // todoData.todos.forEach(element => {
    //     console.log(element)
    // });
    // parsedData.todos

    parsedData.todos.forEach((ele)=>{
            console.log(ele.id)
            if(ele.id%2==0 && ele.status==false)
            {
                ele.status=true

                console.log(ele.id, ele.status)
            }
    })

    fs.writeFileSync("./db.json", JSON.stringify(parsedData))
        res.send("even id will be true")

})

server.delete("/todo/delete", (req, res)=>{
//     // console.log("REQBody" ,req.body)
//     const todoData=fs.readFileSync("./db.json", "utf-8")   
//     // console.log("todoData", todoData)

//     const parsedData=JSON.parse(todoData)    
//     // parsedData.todos.push(todoData)
//     // console.log("parsedData", typeof parsedData.todos) 

//    parsedData.todos.filter(ele=> !ele.status)
// //    console.log(parsedData)


//     fs.writeFileSync("./db.json", JSON.stringify(parsedData.todos))

//     // console.log(parsingData)
//         res.send("true status has been deleted")
const todoData = fs.readFileSync("./db.json", "utf-8");

// Parse the JSON data
const parsedData = JSON.parse(todoData);

// Filter out todos with status true and reassign the result back to parsedData.todos
parsedData.todos = parsedData.todos.filter(ele => !ele.status);

// Write the updated data back to the JSON file
fs.writeFileSync("./db.json", JSON.stringify(parsedData));

// Send a response indicating that the deletion was successful
res.send("Todos with status true have been deleted");

    

})




server.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})

