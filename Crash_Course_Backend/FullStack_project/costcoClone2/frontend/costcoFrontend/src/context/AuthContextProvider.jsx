import { createContext, useState } from "react"
// c p c==>> create provide consume
import axios from "axios"
// import { useNavigate } from "react-router-dom"


export const AuthContext = createContext()        // create context
export default function AuthContextProvider({children}) {

    const [user, setUser] = useState(null)
    const [registeredUser, setRegisteredUser] = useState([])
    // const navigate=useNavigate()

    const login = async(email, password) => {
     try {
            const response=await axios.get(`http://localhost:3000/user?username={username}`)
            if(response.data.length>0 && response.data[0].password==password){
                setUser({username})
                alert('Login successfull')

                // if(response.data.email=="" || response.data.password=="" ){
                //     alert("please fill the information")
                // }
            }
            else{
                alert('Invalid username or password')
            }
     } catch (error) {
        console.error(`Error while loggin in:${error}`)
     }
    }

    const signup = async(email, password, confirmPassword) => {
        if(password!=confirmPassword){
            alert("Password is not matching")
        }
        try {
            const response=await axios.get(`https://costco-dbjson.vercel.app/user?username=${username}`)
            if(response.data.length>0){
                alert('User already exist')
                return
            }
       
            const newUser={email, password}
            await axios.post('https://costco-dbjson.vercel.app/user', newUser)
            alert('User registered successfull')
            setUser(newUser)
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