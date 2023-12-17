const fs = require("fs");

// complete the following fubctions

const isNumber= function () {
    let i=10
    fs.readFile("./text.txt","utf-8" ,(err, data)=>{
        
        if(typeof i==="number"){
            console.log ("This is a number")
        }
        else{
           console.log("This is not number")
        }
        

    })
   
   }

const isStr=function () {
    let j="Suchitra"
    fs.readFile("./text.txt", {encoding:"utf-8"},  (err, data)=>{
        if(typeof j=="string")
        {
            console.log("It is a String")
        }
        else{
            console.log("It is not a String")
        }

    })
   
}


function isArray() {
    let i=[]
console.log(typeof i)

    if(Array.isArray(i)===Array.isArray([]))
    {
        console.log("It is an array")
    }
    else{
        console.log("It is not an array")
    }
}


function isObj() {
    let i={}
    if(typeof i==="object"){
        console.log("It is an object")
    }
    else{
        console.log("It is not an object")
    }

}


function cls() {
   
}


// Export All the functions

module.exports={isNumber,isStr,isArray,isObj}
