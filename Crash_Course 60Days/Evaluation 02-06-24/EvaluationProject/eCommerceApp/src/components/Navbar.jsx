import {Link as ReactRouterLink} from "react-router-dom"
import {Link as ChakraLink, Container, Flex,
    Button
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const ListOfLink=[
    {
        to:"/login",
        label:"LOGIN"
    },
    {
        to:"/products",
        label:"PRODUCTS"
    },
    {
        to:"/",
        label:"HOME"
    },

]

export default function Navbar(){
    const navigate=useNavigate()
    return(
        <Container bg={"teal"} padding={5} maxW={"100%"}>
            <Flex justifyContent={"space-around"}>
            {
            ListOfLink.map((link)=>
                ( <ChakraLink
                    as={ReactRouterLink}
                    key={link.to}
                    to={link.to}
                   >
                    {link.label}

                   </ChakraLink>)
        )
        }
        <Button colorScheme="red" onClick={()=>{
                navigate("/login")
        }}>
            Logout
        </Button>
            </Flex>

      
        
        
        </Container>
    )
}