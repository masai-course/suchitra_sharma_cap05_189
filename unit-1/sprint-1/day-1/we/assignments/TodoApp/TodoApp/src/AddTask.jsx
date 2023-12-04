import { useState } from "react"
import axios from "axios"

export default function AddTask({fetchTask}){
    const [task, setTask]= useState("")

    const addTask= async()=>{
        try {
            await axios.post('http://localhost:3000/Task',{title:task, completed: false})
            fetchTask();
            setTask("")

        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div>
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </div>
    )
}