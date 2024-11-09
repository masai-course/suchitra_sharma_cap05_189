
import { useNavigate } from "react-router-dom"

export default function WhileSuppliesLast(){

        const navigate=useNavigate()

const handleWhileSupplies=()=>{
            navigate("/whileSupplies")
}
    return(
        <>
        {/* <h1>While Supply last</h1> */}
        <button onClick={handleWhileSupplies}>While Supply Last</button>
        
        </>
    )
}