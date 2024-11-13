import { useState } from "react";
import { Input, VStack } from '@chakra-ui/react'
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const navigate=useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleSubmit= async ()=>{
        const payload={
            name:name,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
        try {
            await fetch('https://devnotes-bb11.onrender.com/user/register', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)
            })
                alert("user registered successfully")
                navigate('/login')
        } catch (error) {
            alert('error occured')     
       
        }
        
    }

  return (
        <>
        <h1>Hello welcome to the sign up page</h1>

            <VStack>
                <Input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" placeholder="Enter email-id" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="text" placeholder="Enter Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Input type="submit" onClick={handleSubmit} />

            </VStack>

        </>
    )
}