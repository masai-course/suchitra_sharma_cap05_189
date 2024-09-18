import { useState } from "react"
import { Input } from "@chakra-ui/react"
import axios from 'axios'

export default function Signin(){

        const[name, setName]=useState("")
        const[email, setEmail]=useState("")
        const[password, setPassword]=useState("")
        const[confirmPassword, setConfirmPassword]=useState("")
        const[role, setRole]=useState("")

        const handleSignIn=async ()=>{
                try {
                    await axios.post('https://devnotes-bb11.onrender.com/user/register', {
                       name, email, password, confirmPassword, role
                    },
                {
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                } catch (error) {
                    alert(`error during sign in ${error}`)
                    
                }
        }




    return(
        <>
        <Input type="text" placeholder="Type Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <Input type="email" placeholder="Type Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="text" placeholder="Type Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Input type="password" placeholder="Type Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <Input type="text" placeholder="Type Your Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
       
       <button onClick={handleSignIn}>Submit</button>
        
        </>
    )
}