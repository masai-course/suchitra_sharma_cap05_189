import axios from "axios"
import { useState } from "react"

 let  TodoList= ({ task, fetchTask }) => {
    const [toggle, setToggle]= useState(true)
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/Task/${id}`)
            fetchTask()
            
        } catch (error) {
            console.error(error)
        }
    }
    // console.log("hello todo list", task)
          const toggleBtn=()=>{
            setToggle(!toggle)

          }
    return(
        <div>
            {task.map((el)=>
             (<div key={el.id}>
                <span>{el.title}</span>
                <button onClick={()=>deleteTask(el.id)}>Delete</button> 
                <button onClick={()=>toggleBtn()}>{toggle? "Not Completed": "Completed"}</button>
            </div>)
            
            )}
          
        </div>
    )


    
}

export default TodoList