import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import AddTask from './AddTask'
// import axios from "axios"

function App() {
  const [task, setTask]=useState([])
  const [loading, setLoading]= useState(false)
  const [page, setPage]=useState(1)

  const fetchTask= async()=>{
    setLoading(true)
    try {
      let req=await axios.get('http://localhost:3000/Task')
      let res=await req.data
      console.log(res)

      setTask(res)
      // console.log(setTask)

    } catch (error) {
      console.error(error)
    }finally{
      setLoading(false)
    }
 }
  useEffect(()=>{
    fetchTask()
  },[page])

  return (
    <>
  {loading? "Loading...": (<AddTask tasks={fetchTask} task={task}/>)}

 </>
  )
}

export default App
