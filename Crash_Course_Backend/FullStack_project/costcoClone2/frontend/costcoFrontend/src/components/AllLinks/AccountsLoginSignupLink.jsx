import Login from "../../page/Login"
import Signin from "../../page/Signin"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AccountsLoginSignupLink(){

        const navigate=useNavigate()

        const handleLogin=()=>{
            navigate("/login")
        }

        const handleSignup=()=>{
            navigate("/signin")
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