const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

// for reading
fs.readFileSync("index.js","utf-8")
console.log("I can read file")
// for creating new file
fs.writeFile("test.txt",'hii', (err, res)=>{
  if(err) console.log("err")
  else  console.log("res")
})
// // for deleting fie
// fs.unlink("test.txt",(err,res)=>{
//   if (err) console.log("error")
//   else console.log("res")
// })

// for creating new file
fs.writeFile("test.txt",'hii', (err, res)=>{
  if(err) console.log("err")
  else  console.log("res")
})

// for appending data

fs.appendFile("test.txt", "\n This is my appending text", (err, data)=>{
  if(err) console.log("error")
  else console.log("data")
})

// for renaming file

fs.rename("test.txt", "data.txt", (err, data)=>{
  if (err) console.log("error")
  else console.log("data")
})

// for showing list of files

fs.readdir("index.js",(err, data)=>{
  if (err) console.log(err);
  else console.log(data)
})

// switch (operation) {
//   // complete the fillowing function.
    
//   default:
//     console.log(`Invalid operation '${operation}'`);
// }
