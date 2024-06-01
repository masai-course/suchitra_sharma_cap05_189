import {useContext} from "react"
import { AuthContext } from '../context/AuthContextProvider';
import { Navigate } from "react-router-dom";

function PageWrapper({children}){

    const {authDetails}=useContext(AuthContext)
   
     
    if(!authDetails.isLogggedIn){
      console.log(authDetails)
      return <Navigate to="/" />
    }

    return children
   
 }
 
 export default PageWrapper