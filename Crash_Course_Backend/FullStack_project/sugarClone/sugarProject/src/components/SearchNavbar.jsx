
import {
    Image, Flex, Box, Heading, Spacer, Input, InputRightAddon, InputGroup,
    Link, HStack, Button
} from "@chakra-ui/react"
// import Signin from "../pages/LoginSignin.jsx/Signin"
// import { useNavigate } from "react-router-dom"
import './searchnavbar.css' 
import { Link as ReactRouterLink } from "react-router-dom"
export default function SearchNavbar() {
  


    return (
        <>
            <Flex bg={"black"} padding={2} >

                <Image className="image"
                    // borderRadius='full'

                    // src='https://1000logos.net/wp-content/uploads/2020/07/SUGAR-Cosmetics-Logo1.jpg'
                    src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FLogo%2Fe4e638f6-67fa-43eb-9623-0a2dea7a09cc.gif&w=256&q=100"
                />
                <Heading letterSpacing={1} color={"white"} padding="15px" paddingStart={0} fontSize={"20px"}>
                    SUGAR 
                </Heading>
                <InputGroup w={"650px"} marginStart={"20px"} padding={"15px"} >
                    <Input placeholder='Try "liquid lipstick"' />
                    <InputRightAddon>🔍 Search</InputRightAddon>

                </InputGroup>
                <Spacer />
                {/* <Link padding="30px" color='teal.500' href='#'>
                       🙋‍♀️🙋‍♂️ {register}

                </Link> */}
                 <Image className='icon' src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'/>
            
                <Link className="link" as={ReactRouterLink} to="/signin">Signin</Link>
                    /
                <Link className="link" as={ReactRouterLink} to="/login">Login</Link>
                <Spacer />
                <HStack paddingStart="10px">
                   
                </HStack>
            </Flex>


        </>

    )
}
