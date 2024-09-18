
import { useState } from "react"
import { Input, Button} from "@chakra-ui/react"
export default function ForgotPassword(){
        const [email, setEmail]=useState("")
        const [password, setPassword]=useState("")
        const [confirmPassword, setConfirmPassword]=useState("")



    return(
        <>
        <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Input type="confirmPassword" placeholder="Enter Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <Button>Submit</Button>

        
        </>
    )
}