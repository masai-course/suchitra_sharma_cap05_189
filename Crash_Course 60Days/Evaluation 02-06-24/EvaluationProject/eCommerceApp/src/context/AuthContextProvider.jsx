import { createContext } from 'react';
import {useState} from "react"

export const AuthContext=createContext()

export default function AuthContextProvider({children}){

        const[isAuthenticated, setIsAuthenticated]=useState({
            isloggedIn: false, 
            token: null, 
            email: null
        })


        const login=()=>{
            setIsAuthenticated({
                isLoggedIn: true, 
                token: token, 
                email: email
            })
        }

        return(
            <AuthContext.Provider value={{login, isAuthenticated}}>

                {children}
            </AuthContext.Provider>
        )


}