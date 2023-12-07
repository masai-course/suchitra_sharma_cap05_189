import { useState } from "react"
import axios from "axios"

const AddTask= ({tasks,task})=>{

const [addTask, setAddTask]=useState("")

const addTaskUI= async()=>{
    try {
        let response=await axios.post('http://localhost:3000/Task',{name:addTask})
       tasks()
       setAddTask("")

    } catch (error) {
        console.error(error)
    }
   
}


console.log(`hello task ${task}`)
   
return(
    <>

{ task.map((ele)=>(
    <div key={ele.id}>
    <span>{ele.name}</span>
</div> 

)
     )
}
<input type="text" value={addTask} placeholder='Add Task Here' onChange={(e)=>setAddTask(e.target.value)} />
<button onClick={addTaskUI}>Add Task</button>
</>
    )
}










export default AddTask