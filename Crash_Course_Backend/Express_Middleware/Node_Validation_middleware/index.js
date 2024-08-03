const express = require('express')

const server = express()
const PORT = 5000

server.use(express.json())

const stringsInArray = (arr) => {
    let flag=true
    arr.forEach((ele)=>{
         if(typeof ele!=='string')
            {
                flag=false
                return
            }
    })
    return flag
    

}
// const stringsInArray = (arr) => {
//     return arr.every(ele => typeof ele === 'string');
// };

const validatorMiddleware = (req, res, next) => {
    // console.log(req)
    let { ID , Name, Rating, Description, Genre, Cast} = req.body
    // console.log({ID,Name, Rating, Description, Genre, Cast })
    //  

    let errorMsg = ""
    if (typeof ID !== 'number') {
        errorMsg += "ID must be in number"
    }
    if (typeof Name !== 'string') {
        errorMsg += "Name must be in string"
    }
    if (typeof Rating !== 'number') {
        errorMsg += "Rating must be in number"
    }
    if (typeof Description !== 'string') {
        errorMsg += "Description must be in string"
    }
    if (typeof Genre !== 'string') {
        errorMsg += "Genre must be in string"
    }
    if (!Array.isArray(Cast) || !stringsInArray(Cast)) {
        errorMsg += "Cast must be an array of strings"
    }


    if (errorMsg) {
      return  res.status(400).json({
            message: "bad request. some data is incorrect",
            note: errorMsg,
        })
    }


    // console.log("I am middleware")
    next()
}

server.post("/", validatorMiddleware, (req, res) => {

    // console.log("welcome to the new page")
    res.status(200).json({ message: "data received" })
})



server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})