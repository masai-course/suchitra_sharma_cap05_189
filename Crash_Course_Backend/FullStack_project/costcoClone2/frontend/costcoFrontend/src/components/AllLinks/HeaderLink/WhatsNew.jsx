import { useNavigate } from "react-router-dom"

export default function WhatsNew(){
    const navigate=useNavigate()

    const handleWhatsNew=()=>{
        navigate("/whatsNew")
    }
    return(
        <>
        {/* <h1>Whats New</h1> */}

        <button onClick={handleWhatsNew}>WhatsNew</button>
        
        </>
    )
}