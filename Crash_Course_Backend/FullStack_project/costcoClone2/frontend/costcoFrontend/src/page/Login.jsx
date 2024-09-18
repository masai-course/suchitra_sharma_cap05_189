import { useState } from "react"
import { Input, Button } from "@chakra-ui/react"
import axios from "axios"


export default function Login(){

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [token, setToken]=useState("")
    const [error, setError]=useState("")

    const handleLogin=async()=>{
        try {
           const response= await axios.post('http://localhost:3000/user/login',{
                email,password
            },
        {
            headers:{
                'Content-Type':"application/json"
            }

        })
            setToken(response.data.token)
            setError("")  // when login success previous error will empty

        } catch (error) {
            setError(error.response.msg || "login failed")
        }
    }


    return(
        <>
        <Input type="text" placeholder="Enter Registered Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Submit</Button>  
        {token && <Text>Login Successfull & token:{token}</Text>}
        {error && <Text>There is an error: {error}</Text>}
        
        </>
    )
}
