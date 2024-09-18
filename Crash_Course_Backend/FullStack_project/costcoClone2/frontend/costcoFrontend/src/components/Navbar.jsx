import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
    MenuItem,
    HStack,
    Link,
    VStack
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'
import './navbar.css'

export default function Navbar() {
    return (
        <>

            <HStack id='mainHstack' spacing={"30px"} marginBlockStart={"20px"} >
                <Menu maxW={"20px"}>

                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        maxW={"30px"}

                    />
                    Shop



                    <MenuList >
                        <MenuItem  >
                            Appliances <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Baby <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Beauty <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Clothing, Luggage & Handbags <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Computers <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Costco Direct <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Costco Next <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Floral & Gift Baskets <ChevronRightIcon />
                        </MenuItem>
                        <MenuItem  >
                            Furniture <ChevronRightIcon />
                        </MenuItem>
                    </MenuList>
                </Menu>
                <HStack spacing={"30px"}>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Grocery</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Same Day</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Deals</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Business Delivery</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Optical</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Pharmacy</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Photo</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Services</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Photo</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Travel</Link>
                    <Link color={"white"} fontWeight={"bold"} fontSize={"18px"}>Location</Link>

                </HStack>
            </HStack>
            <div id='divP'>
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
                
            </div>
               
             



        </>
    )
}