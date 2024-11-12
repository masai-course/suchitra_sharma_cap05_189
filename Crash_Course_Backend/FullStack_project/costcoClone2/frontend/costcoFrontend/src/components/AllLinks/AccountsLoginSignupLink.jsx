

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AccountsLoginSignupLink(){

        const navigate=useNavigate()

        const handleLogin=()=>{
            navigate("/login")
        }

        const handleSignup=()=>{
            navigate("/signup")
        }

        return(
            <>
             <div>
                <button onClick={handleLogin}>Login</button> |
                <button onClick={handleSignup}>Signup</button>
               
               

            </div>
         
         

           
           
           
            
            
            </>
        )

}