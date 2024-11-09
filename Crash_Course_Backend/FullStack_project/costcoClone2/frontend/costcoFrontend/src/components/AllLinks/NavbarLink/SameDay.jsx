
import { useNavigate } from "react-router-dom"

export default function SameDay(){
       const navigate=useNavigate()
       
       const handleSameDay=()=>{
            navigate("/sameDay")
       }

    return(
        <>
        {/* <h1>Same Day</h1> */}
        <button onClick={handleSameDay}>SameDay</button>
        </>
    )
}