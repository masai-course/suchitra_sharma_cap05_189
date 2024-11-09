import { useNavigate } from "react-router-dom"


export default function Shop(){

    const navigate=useNavigate()

    const handleShop=()=>{
        navigate("/shop")
    }

    return(
        <>
        {/* <h1>Shop</h1> */}
        <button onClick={handleShop}>Shop</button>
        
        </>
    )
}