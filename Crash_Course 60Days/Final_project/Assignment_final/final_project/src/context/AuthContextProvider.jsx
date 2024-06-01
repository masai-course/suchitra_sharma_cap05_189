import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
//C P C-->> Create Provide Consume

export const AuthContext=createContext()       //creating context

export default function AuthContextProvider({children}){

    const [authDetails, setAuthDetails]=useState({
        isLogggedIn:false,
        token:null
    })

    const login=(token)=>{
        setAuthDetails(
            {
                isLogggedIn:true,
                token:token
            }
        )
        console.log("logged in")
     }

    const logout=()=>{
        setAuthDetails({
            isLogggedIn:false,
            token:null
         })
        //  <Navigate to="/" />
         console.log(authDetails)
    }

    return(
        //provide the context 
        <AuthContext.Provider value={{authDetails, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}


