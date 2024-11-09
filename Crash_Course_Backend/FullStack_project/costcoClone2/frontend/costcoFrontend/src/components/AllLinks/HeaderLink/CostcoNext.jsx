import { useNavigate } from "react-router-dom"


export default function CostcoNext(){

    const navigate=useNavigate()

    const handleCostco=()=>{
        navigate('/costcoNext')
    }
    return(
        <>
        {/* <h1>Costco---Next</h1> */}
        <button onClick={handleCostco}>CostcoNext</button>
        
        </>
    )
}