// import { createContext } from "react"
// import { useState } from "react"


// export const SignupContext=createContext()

// export default function SignupContextProvider({children}){

//     const[signupUser, setSignupUser]=useState({
//         email:"",
//         password:"",
//         confirmPassword:""
//     })

//    const signup=()=>{
//         return {
//             email:"email",
//             password:"password",
//             confirmPassword:"password"
//         }
//    }

//     return(
//         <SignupContext.Provider value={signup}>
//             {children}
//         </SignupContext.Provider>
//     )
// }