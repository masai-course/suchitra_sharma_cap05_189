import { useState, useContext } from "react"
import { Input } from "@chakra-ui/react"
import axios from 'axios'
import Login from "./Login"
import { AuthContext } from "../context/AuthContextProvider"
import { useNavigate } from "react-router-dom"

export default function Signin(){                   // change the component Signin to Signup 

    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const {signup}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        signup(username, password)      //call signup function from context api
        navigate("/login")
    }
        
    
 return(
        <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <div>
        <label>Username :</label>
        <Input type="text" placeholder="Type Your Name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
       <label>Password :</label>
        <Input type="text" placeholder="Type Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>


        </div>
        <button type="submit">Register</button>
         </form>
    )
}