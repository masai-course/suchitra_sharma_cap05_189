import { HStack, VStack, Link } from "@chakra-ui/react"
export default function Location(){

    return(
    
         <HStack>
                <VStack marginBlockStart={"0px"}>
                    <div>
                        <p >My Warehouse</p>
                        <p> Seattle</p>
                        <p>Closed: Open 9.30 AM Saturday</p>

                    </div>


                </VStack>
                <VStack>
                   <p>Delivery Location</p> 
                    <p>98101</p>
                </VStack>
                <HStack marginLeft={"800px"}>
                <Link>Lists |</Link>
                <Link>Buy Again</Link>

                </HStack>
                


                </HStack>
        
        
        
        
    )
}