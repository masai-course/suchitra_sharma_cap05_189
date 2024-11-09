import { Container, Link, Image, Input, InputRightAddon, InputGroup, VStack, HStack } from "@chakra-ui/react"
import './header.css'
import Signin from "../page/Signin"
import AccountsLoginSignupLink from "./AllLinks/AccountsLoginSignupLink"
import CostcoNext from "./AllLinks/HeaderLink/CostcoNext"
import WhatsNew from "./AllLinks/HeaderLink/WhatsNew"
import WhileSuppliesLast from "./AllLinks/HeaderLink/WhileSuppliesLast"

export default function Header() {
    return (
        <>


            <h3 >New And Unique Items Added Today! Shop This Week's treasure Hunt</h3>
            <Container maxW={"90%"} marginBlockStart={"20px"} >
                <VStack spacing={"20px"}>
                    <HStack spacing={"25px"}>
                        <CostcoNext/>
                        {/* <Link fontSize={'18px'} fontWeight={'bold'}>Costco Next</Link> */}
                        <WhatsNew/>
                        {/* <Link fontSize={'18px'} fontWeight={'bold'}>What's New</Link> */}
                        {/* <Link fontSize={'18px'} fontWeight={'bold'}>While Supplies Last</Link> */}
                        <WhileSuppliesLast/>
                        <Link fontSize={'18px'} fontWeight={'bold'}>Get Email Offers</Link>
                        <Link fontSize={'18px'} fontWeight={'bold'}>Customer Service</Link>
                        <Link fontSize={'18px'} fontWeight={'bold'}>Member favorite</Link>
                        <Link fontSize={'18px'} fontWeight={'bold'}>New Lower Price</Link>
                        <Link fontSize={'18px'} fontWeight={'bold'}>US</Link>

                    </HStack>
                </VStack>
            </Container>
            <HStack spacing={"10px"} marginBlockStart={"10px"}>

                <Image w={"100px"} src="https://cdn.bfldr.com/56O3HXZ9/at/wkgcrwxgt5bt39wg63kgmqr/Costco-Logo-Registered.png?auto=webp&format=jpg" />

                <InputGroup maxW={"650px"}>
                    <Input type="text" placeholder="search Costco" /> <InputRightAddon>🔍</InputRightAddon>
                </InputGroup>
                <HStack spacing={"40px"}>
                    {/* <Link padding={"40px"} fontSize={'20px'} >{AccountsLoginSignupLink}</Link> */}
                    {/* <Link padding={"40px"} fontSize={'20px'} to='/signin' >{Signin} </Link> */}
                    <AccountsLoginSignupLink/>
                    <Link fontSize={'20px'}>Orders & Returns </Link>
                    <Link fontSize={'20px'}> 🛒Cart</Link>

                </HStack>




            </HStack>









        </>
    )
}