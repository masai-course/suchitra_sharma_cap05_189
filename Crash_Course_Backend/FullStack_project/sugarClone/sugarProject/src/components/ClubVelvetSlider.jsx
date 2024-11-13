
import { Container, HStack, Heading, Image, VStack, Box, Link,
    StackDivider

} from "@chakra-ui/react"

export default function ClubVelvetSlide() {
    return (
        <>
            <Heading marginLeft="300px" padding={5}>
                ---------CLUB VELLVETTE----------
            </Heading>
            <Container height="200px" bg={"black"} maxW="80%" marginTop={5} borderRadius={"7px"}>
                <HStack>
                    <Image width="300px" height="100px" margin="50px" 
                   marginLeft="10px"     src="https://d32baadbbpueqt.cloudfront.net/Clubvellvette/Desktop_Banner.png"/>
                <VStack>
                <Heading color={"white"}>
                    Buy Rs.299 for 6 months
                </Heading>
                <h3 style={{color:"white"}}>Save 20% EXTRA + FREE Shipping</h3>
                <Link color={"purple"}>JOIN NOW</Link>

                </VStack>
               </HStack>


            </Container>
           <hr style={{borderColor:"gray", 
                marginTop:"18px", width:"90%", marginLeft:"70px"

           }}/>
           



        </>
    )
}
