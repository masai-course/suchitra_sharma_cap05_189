

import {HStack, Link , Flex} from "@chakra-ui/react"

export default function Navbar(){
    return(
        <>

        <HStack justifyContent={"space-around"} padding={5} bg={"black"}>
            <Link color={"white"} fontWeight={"bold"}>SUGAR PLAY</Link>
            <Link color={"white"} fontWeight={"bold"}>LIPS</Link>
            <Link color={"white"} fontWeight={"bold"}>EYES</Link>
            <Link color={"white"} fontWeight={"bold"}>FACE</Link>
            <Link color={"white"} fontWeight={"bold"}>NAILS</Link>
            <Link color={"white"} fontWeight={"bold"}>SKINCARE</Link>
            <Link color={"white"} fontWeight={"bold"}>ACCESSORIES</Link>
            <Link color={"white"} fontWeight={"bold"}>GIFTING</Link>
            <Link color={"white"} fontWeight={"bold"}>BESTSELLERS</Link>
            <Link color={"white"} fontWeight={"bold"}>NEW LAUNCHES</Link>
            <Link color={"white"} fontWeight={"bold"}>OFFERS</Link>
            <Link color={"white"} fontWeight={"bold"}>BLOG</Link>


        </HStack>
        
        
        </>
    )
}