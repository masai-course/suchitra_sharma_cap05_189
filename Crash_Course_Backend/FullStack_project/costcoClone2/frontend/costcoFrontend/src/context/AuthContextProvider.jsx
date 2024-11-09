import { createContext, useState } from "react"
// c p c==>> create provide consume
import axios from "axios"
// import { useNavigate } from "react-router-dom"


export const AuthContext = createContext()        // create context
export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const [registeredUser, setRegisteredUser] = useState([])
    // const navigate=useNavigate()

    const login = async(username, password) => {
     try {
            const response=await axios.get(`http://localhost:3000/user?username=${username}`)
            if(response.data.length>0){
                setUser({username})
                alert('Login successfull')
                
            }
            else{
                alert('Invalid username or password')
            }
     } catch (error) {
        console.error(`Error while loggin in:${error}`)
     }
        

    }

    const signup = async(username, password) => {
        try {
            const response=await axios.get(`http://localhost:3000/user?username=${username}`)
            if(response.data.length>0){
                alert('User already exist')
                return
            }
       
            const newUser={username, password}
            await axios.post('http://localhost:3000/user', newUser)
            alert('User registered successfull')
            // setUser("")
        } catch (error) {
            console.log('Error registering error')
        }
        
    }

    const logout = () => {
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ user, signup, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}