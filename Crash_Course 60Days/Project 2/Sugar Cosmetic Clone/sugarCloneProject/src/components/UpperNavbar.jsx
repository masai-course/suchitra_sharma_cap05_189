
import { Heading, Box, Spacer, Flex, HStack} from "@chakra-ui/react"
export default function UpperNavbar(){
    return (
        <>
      <Flex padding={2} bg={"#662d91"}>
        <Box>
            <Heading fontSize="20px">
                Exclusive offer 
            </Heading>
        </Box>
        <Spacer/>
        <Box>
            <HStack>
            <Heading fontSize="20px">
            GET APP 
        </Heading>
        <Heading fontSize="20px">
           STORE
        </Heading>
        <Heading fontSize="20px">
            GIFT CARD
        </Heading>
        <Heading fontSize="20px">
            HELP
        </Heading>

            </HStack>
      

        </Box>
      </Flex>
      

     

   
       
        
        </>
    )
}