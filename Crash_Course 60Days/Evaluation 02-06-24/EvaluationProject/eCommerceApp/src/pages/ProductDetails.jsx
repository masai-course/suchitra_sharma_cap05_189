import {useState, useEffect} from "react"

import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductDetails(){
        const {id}=useParams()
        const [product, setProduct]=useState({})

        async function fetchProductDetails(id){
            try {
                let res=await axios({
                    method:"get",
                    url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products${id}`

                })
                console.log("response" ,res)
                setProduct(res)
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(()=>{
            fetchProductDetails(id)
        },[id])
    return(
        <>
        <h1>Products Detail Page: {id}</h1>
        </>
    )
}