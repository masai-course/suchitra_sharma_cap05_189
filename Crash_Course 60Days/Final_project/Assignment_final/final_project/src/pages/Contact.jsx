import {HStack, Button, Container} from "@chakra-ui/react"



function Contact() {
    return (
        <>
      
        <Container maxW="90%" >

       
            <HStack spacing={5} marginLeft="100px" bg={"lightcoral"} height="70px" >
                <h1>IIT Courses</h1>
                <h1>Courses</h1>
                <h1>Events</h1>
                <h1>Fees</h1>
                <h1>Learn</h1>
                <h1>Success Stories</h1>
                <h1>Hire From Us</h1>
                </HStack>
                <HStack>
                <Button>REFER & EARN</Button>
                <Button>SIGN UP</Button>
                </HStack>
               
                <h1>Contact Page</h1>
           
            </Container>
           
           
        </>
    )


}

export default Contact