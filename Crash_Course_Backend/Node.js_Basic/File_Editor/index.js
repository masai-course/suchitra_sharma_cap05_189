// const { error } = require("console");
const { error } = require("console");
const fs = require("fs");

const operation = process.argv[2];   //get operation type from command line arguments

const file = process.argv[3];     // get file path from command line arguements

const data = process.argv[4];     // get data written from command line (if applicable)





const readTheFile =() =>{
  fs.readFile(file, 'utf-8', (err, fileData)=>{
    if(err){
      console.log(error)
    }
    else
    {
      console.log(fileData);
    }
})
}


const appendTheFile=()=>{fs.appendFile(file,`\n ${data} \n`, "utf-8",(err, fileData)=>{
    if(err){
    console.log(error);
    }
    else{
      console.log(fileData)
    }
   
})
}
const deleteTheFile=()=>{fs.unlink(file, (err)=>{
    if(err){
      console.log("error");
    }
 
})}


const createTheFile=()=>{fs.writeFile(file,'utf-8', (err)=>{
    if(err){
      console.log(error)
      return
    }
  //  console.log(data);
})}


const renameTheFile=()=>{
  const newFileName=process.argv[4]
  fs.rename(file, newFileName, (err)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      console.log(`File rename to ${newFileName}`);
    }
  })
}


const showTheList=()=>{
  const dirPath=file;
  fs.readdir(dirPath, (err, files)=>{
    if(err)
    {
      console.log(error);
    }
    else{
      files.forEach(element=>{
          console.log(element);
      })
    }

})
}



switch (operation) {
  // complete the fillowing function.

  case 'read':
    // (readTheFile)
    readTheFile()
  break;
  case 'write':
    appendTheFile()
  break;
  case 'delete':
    deleteTheFile()
    break;
   case 'create':
    createTheFile()
    break; 
    case 'rename':
      renameTheFile()
     break; 
    case 'list':
    //   // const operation=progress.argv[1]
    //   // const path=progress.argv[3]
      showTheList()

      break;
  
  default:
    console.log(`Invalid operation '${operation}'`);
}
