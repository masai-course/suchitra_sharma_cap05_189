import { useState } from "react"
import { Input } from "@chakra-ui/react"

export default function Login(){
   
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    return(
        <>
        
        Welcome to the Login Page
        <Input type="text" placeholder="Enter registered email-id" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />        
        <Input type="submit">Submit</Input>

        </>

    )
}