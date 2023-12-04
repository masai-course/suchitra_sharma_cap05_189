import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import TodoList from './TodoList'
import AddTask from './AddTask'


function App() {
  const [tasks, setTasks]=useState([])
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState(null)
  const [page, setPage]=useState(1)
  


  const fetchTasks= async ()=>{
    setLoading(true)
    try {
      const req= await axios.get(`http://localhost:3000/Task?_limit=3&_page=${page}`)
      let res= await req.data
      console.log(res)
   setTasks(res) //this data is syntax when we use axios for fetching data.
    } catch (error) {
      setError(error)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchTasks()
  },[page])

  return (
    <div className='App'>
      {error && <div>Error :{error}</div>}
      {loading  ? (<div>Loading...</div>) :(<TodoList task={tasks} fetchTask={fetchTasks}/>)}
      <AddTask fetchTask={fetchTasks}/>
      <button disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button>
      <button onClick={()=>setPage(page+1)}>Next</button>
     
    </div>
  )
}

export default App
