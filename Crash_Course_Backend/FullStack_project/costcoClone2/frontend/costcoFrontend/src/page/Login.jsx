import { useState, useContext } from "react"
import { Input, Button } from "@chakra-ui/react"
import axios from "axios"
import { AuthContext } from "../context/AuthContextProvider"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(AuthContext)
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(username, password)
        navigate("/")
    }



    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Username :</label>
                <Input type="text" placeholder="Enter Registered username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password :</label>
                <Input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            </div>
            <Button type="submit">Login</Button>

        </form>
    )
}
