import { Container, Link, Image, Input, InputRightAddon, InputGroup, VStack, HStack} from "@chakra-ui/react"
import './header.css'
import Signin from "../page/signin"

export default function Header() {
    return (
        <>
        
            
            <h3 >New And Unique Items Added Today! Shop This Week's treasure Hunt</h3>
            <Container maxW={"90%"} marginBlockStart={"20px"} >
            <VStack spacing={"20px"}>
            <HStack spacing={"25px"}>
            <Link fontSize={'18px'} fontWeight={'bold'}>Costco Next</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>What's New</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>While Supplies Last</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>Get Email Offers</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>Customer Service</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>Member favorite</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>New Lower Price</Link>
        <Link fontSize={'18px'} fontWeight={'bold'}>US</Link>

            </HStack>
            </VStack>
            </Container>
        <HStack spacing={"10px"} marginBlockStart={"10px"}>
       
        <Image w={"100px"} src="https://cdn.bfldr.com/56O3HXZ9/at/wkgcrwxgt5bt39wg63kgmqr/Costco-Logo-Registered.png?auto=webp&format=jpg"/>
      
       <InputGroup maxW={"650px"}>
        <Input  type="text" placeholder="search Costco" /> <InputRightAddon>🔍</InputRightAddon>
        </InputGroup>
<HStack spacing={"40px"}>
<Link padding={"40px"} fontSize={'20px'} to='/signin'>Account </Link>    
        <Link fontSize={'20px'}>Orders & Returns </Link>   
        <Link fontSize={'20px'}> 🛒Cart</Link>

</HStack>
        
        
     

        </HStack>
       

         
      
       



            
        </>
    )
}