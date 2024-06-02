import {useState, useEffect} from "react"
import { Input } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
// import {AuthContextProvider} from "../context/AuthContextProvider"
import { Button, Container, VStack } from "@chakra-ui/react"
import axios from "axios"


export default function Login(){

        const[email, setEmail]=useState("")
        const[password, setPassword]=useState("")
        // const {login}=useContext(AuthContext)
       

        async function handleClick(){
            try {
                let res=await axios({
                    method:"get",
                    url:" http://localhost:3000/user"

                })
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }


    return(
        <Container>
        <h1>Login Page</h1>
        <VStack>
        <Input placeholder="Enter email" type="text" value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
        />
        <Input placeholder="Enter password" type="password" value={password}
            onChange={(e)=>{
                    setPassword(e.target.value)
            }}
        />
        <Button onClick={handleClick}>
            Login
        </Button>
        </VStack>
        
        </Container>
    )
}