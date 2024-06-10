import { Link as ReactRouterLink} from "react-router-dom"
// import AllRoutes from "./AllRoutes"
import {Link as ChakraLink, HStack} from "@chakra-ui/react"


const listOfLink=[
    {
        to:"/sugar/products",
        label:"SUGAR PLAY"
    },
    {
        to:"/lips",
        label:"LIPS"
    },
    {
        to:"/eyes",
        label:"EYES"
    },
    {
        to:"/face",
        label:"FACE"
    },
    {
        to:"/nails",
        label:"NAILS"
    },
    {
        to:"/skincare",
        label:"SKINCARE"
    },
    {
        to:"/accessories",
        label:"Accessories"
    },
    {
        to:"/giftings",
        label:"GIFTING"
    },
    {
        to:"/bestsellers",
        label:"BESTSELLERS"
    },
    {
        to:"/newlaunches",
        label:"NEW LAUNCHES"
    },
    {
        to:"/offers",
        label:"OFFERS"
    },
    {
        to:"/blog",
        label:"BLOG"
    },
    {
        to:"/signin",
        label:"SIGN IN"
    },
    {
        to:"/login",
        label:"Login"
    }

]

export default function SearchNavbarLink(){
    return(
        <>
        <HStack justifyContent={"space-around"}
        padding={5} bg={"black"}>
        {
            listOfLink.map((link)=>(
                    // console.log(e)
                  <ChakraLink
                  as={ReactRouterLink}
                  key={link.to} to={link.to}
                  color={'white'}
                  fontWeight={"bold"}
                 
                  >
                 {link.label}
                   </ChakraLink>
      
            
            ))
        }

        </HStack>
        
        </>
    )
}