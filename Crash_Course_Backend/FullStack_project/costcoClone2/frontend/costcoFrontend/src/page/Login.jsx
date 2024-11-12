import { useState, useContext } from "react"
import { Input, Button, Container, HStack, VStack, Image} from "@chakra-ui/react"
import axios from "axios"
import { AuthContext } from "../context/AuthContextProvider"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(username, password)
        navigate("/")
    }

    const navigate_signup=()=>{
        navigate("/signup")
    }


    return (
        <>
       
         <Image w={"100px"} src="https://cdn.bfldr.com/56O3HXZ9/at/wkgcrwxgt5bt39wg63kgmqr/Costco-Logo-Registered.png?auto=webp&format=jpg" 
         marginBlockStart="20px" marginLeft="600px" width="200px"
         
         />
         <hr />

        <form onSubmit={handleSubmit} marginBlockStart="30px">
            <h2>Login</h2>
            <Container w="40%" h="500px" border="1px solid black" >
                <VStack marginBlockStart="20px" >


                    <HStack w="80%" marginBlockStart="30px">

                        <label style={{ fontWeight: "bold" }}>Email_Id: </label>
                        <Input type="text" placeholder="Enter Registered email" value={username} onChange={(e) => setUsername(e.target.value)}
                            border="1px solid black"
                        />

                    </HStack>
                    <HStack w="80%"> 
                    
                        <label style={{ fontWeight: "bold" }}>Password:</label>
                        <Input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} border="1px solid black" />

                    </HStack>

                    <p style={{ color: "blue", textDecorationStyle: "dotted" }}>Forgot Password??</p>




                    <Button type="submit" backgroundColor="lightgreen" w="80%" fontWeight="bold">SUBMIT</Button>
                </VStack>

                <br />
                <hr />

                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>New to Costco?</p>
                <Button w="80%" marginLeft="40px" backgroundColor="lightgreen" marginBlockStart="30px" fontWeight="bold" onClick={navigate_signup}>Create Account</Button>


            </Container>


        </form>
        </>
    )
}
