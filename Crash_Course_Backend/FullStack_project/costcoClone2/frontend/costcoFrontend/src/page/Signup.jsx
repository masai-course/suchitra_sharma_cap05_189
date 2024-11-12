import { useState, useContext } from "react"
import { Input, Container, VStack, HStack, Button, Image } from "@chakra-ui/react"
import axios from 'axios'
import Login from "./Login"
import { AuthContext } from "../context/AuthContextProvider"
import { useNavigate } from "react-router-dom"

export default function Signup() {                   // change the component Signin to Signup 

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [membershipNum, setMembershipNum]=useState("")
    const { signup } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(username, password)      //call signup function from context api
        navigate("/login")
    }

    const navigate_signIn=()=>{
        navigate("/login")
    }

    return (
        //     <form onSubmit={handleSubmit}>
        //     <h2>Sign up</h2>
        //     <div>
        //     <label>Username :</label>
        //     <Input type="text" placeholder="Type Your Name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        //    <label>Password :</label>
        //     <Input type="text" placeholder="Type Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>


        //     </div>
        //     <button type="submit">Register</button>
        //      </form>
        <>
            <Image w={"100px"} src="https://cdn.bfldr.com/56O3HXZ9/at/wkgcrwxgt5bt39wg63kgmqr/Costco-Logo-Registered.png?auto=webp&format=jpg"
                marginBlockStart="20px" marginLeft="600px" width="200px" />
            <hr />

            <form onSubmit={handleSubmit} marginBlockStart="30px">
                <h2>Signup</h2>
                <Container w="40%" h="550px" border="1px solid black" >
                    <VStack marginBlockStart="20px" >


                        <HStack w="80%" marginBlockStart="30px">

                            {/* <label style={{ fontWeight: "bold" }}>Email_Id:    </label> */}
                            <Input w="90%" type="text" placeholder="Enter Registered email" value={username} onChange={(e) => setUsername(e.target.value)}
                                border="1px solid black"
                            />

                        </HStack>
                        <HStack w="80%">

                            {/* <label style={{ fontWeight: "bold" }}>Password:</label> */}
                            <Input w="90%" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} border="1px solid black" />

                        </HStack>
                        <HStack w="80%">

                            {/* <label style={{ fontWeight: "bold" }}>Confirm_Password:</label> */}
                            <Input w="90%" type="password" placeholder="Enter Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} border="1px solid black" />

                        </HStack>
                        <HStack w="80%">

                            {/* <label style={{ fontWeight: "bold" }}>Confirm_Password:</label> */}
                            <Input w="90%" type="text" placeholder="Enter Membership Number (optional)" value={membershipNum} onChange={(e) => setMembershipNum(e.target.value)} border="1px solid black" />

                        </HStack>

                        <p style={{ color: "blue", textDecorationStyle: "dotted" }}>where can i found my membership number?</p>
                        {/* <br /> */}
                        <p>By creating an account you agree to costco.com <span style={{color:"blue"}}>Terms & Conditions</span></p>


                        <Button type="submit" backgroundColor="lightgreen" w="80%" fontWeight="bold">Create Account</Button>
                    </VStack> <br />
                    <hr />

                    <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Already have an account?   
                        <span onClick={navigate_signIn} style={{color:"blue"}}> Sign in</span>
                    </p>
                   


                </Container>


            </form>

        </>



    )
}