import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink, Flex, Button } from '@chakra-ui/react'
import { AuthContext } from "../context/AuthContextProvider"
import {useContext} from 'react'
const listOfLink = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/about",
        label: "About"
    },
    {
        to: "/contact",
        label: "Contact"
    },
    {
        to: "/login",
        label: "Login"
    },
    {
        to: "/tickets",
        label: "Tickets"
    },
    

]



function Navbar() {

    const {logout}=useContext(AuthContext)
    return (
        <Flex
            justifyContent={"space-around"}
            backgroundColor={"lightblue"}
            padding={4}
        >
            {
                listOfLink.map((link) => (
                    <ChakraLink
                        as={ReactRouterLink}
                        key={link.to}
                        to={link.to}
                        color="red.900"
                        fontWeight="bold"
                        fontSize={20}
                    >

                        {link.label}
                    </ChakraLink>
                ))
            }

            <Button colorScheme='teal' variant='outline' width={20} onClick={logout}>
                    Logout
                </Button>

        </Flex>
    )



}

export default Navbar