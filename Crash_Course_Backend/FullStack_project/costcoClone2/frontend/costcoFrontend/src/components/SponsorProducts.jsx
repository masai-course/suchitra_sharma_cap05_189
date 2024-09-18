
import { Image } from "@chakra-ui/react"



export default function SponsorProducts({imageUrl, amount, description, rating}){

    return(
        <>
        <Image src={imageUrl}/>
        <h3>{amount}</h3>
        <h4>{description}</h4>
        <h5>{rating}</h5>
        
         </>
    )
}