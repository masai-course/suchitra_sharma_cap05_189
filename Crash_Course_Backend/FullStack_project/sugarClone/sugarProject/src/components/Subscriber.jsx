

import { Heading, VStack, Input, InputGroup, InputRightAddon,
    Link, Stack
} from "@chakra-ui/react"


export default function Subscriber() {
    return (
        <>
            <Link margin={"10px"} fontWeight={"bold"}>READ MORE ABOUT SGAR COSMETICS....</Link>

            <VStack marginTop={"70px"}>
                <Heading fontSize={"40px"}>
                LET'S STAY IN TOUCH
                  </Heading>
                <p>Get the latest beauty tips straight to your inbox. Can't wait to connect

                </p>
            </VStack>
            <Stack>
            <InputGroup w={"650px"}  padding={"15px"} marginRight={"200px"} marginStart="300px">
                 <Input placeholder='Enter Email' />
                <InputRightAddon bg={"black"} color={"white"} >Subscriber</InputRightAddon>
            </InputGroup>

            </Stack>
            {/* <hr style={{borderColor:"gray", 
                marginTop:"18px", width:"90%", marginLeft:"70px"

           }}/> */}
           



        </>
    )
}