import { Box, Heading, Input, VStack, Button, Container } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AuthContext} from '../context/AuthContextProvider'
import {Navigate, useNavigate} from 'react-router-dom'
import { color } from 'framer-motion'

function Login() {
    // const navigate=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    

    const {login, authDetails, logout} = useContext(AuthContext)
   
    
    async function handleClick(){
       console.log({email,password})
        try {
            let response = await axios({
                method:"post",
                url:"https://reqres.in/api/login",
                data:{
                    email,
                    password
                }
            })

            console.log(response.data.token)
            login(response.data.token)
    
         } catch (error) {
        console.log(error)
        }
    }

   
    if(authDetails?.isLogggedIn){
        console.log("here")
        navigate("/")
    }
   

    // if(!authDetails?.isLogggedIn){
    //     return <Navigate to="/"/>
    // }
    return (
        <Container bg={"beige"}>
            <p>"eve.holt@reqres.in","cityslicka" </p>
            <VStack>
                <h1>Login Page</h1>
                <Input borderColor={"black"} placeholder='email' type='text' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                    console.log(email)
                }} ></Input>
                <Input borderColor={"black"} placeholder='password' type='password' value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        console.log(password)
                    }}>
                </Input>
                <Button colorScheme='teal' variant='outline' width={20} onClick={handleClick}>
                    Login
                </Button>
               
            </VStack>

        </Container>

    )


}

export default Login