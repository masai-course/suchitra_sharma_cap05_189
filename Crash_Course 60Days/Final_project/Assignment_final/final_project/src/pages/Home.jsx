// // import React from "react"
import { HStack, VStack, Stack, StackDivider, Box, Flex, Spacer,
    Button, Image
  } from "@chakra-ui/react"
 
 export default function Home(){
     return (<>
         {/* <Routes>
            <Route path="*" element={<Blog/>}/>
            <Route path="*" element={<Pricing/>}/>
            <Route path="*" element={<LoginHome/>}/>
            
         </Routes> */}
 
         <Stack bg={"black"}>
             <HStack>
             <VStack
                 // divider={<StackDivider borderColor='gray.200' />}
                 spacing={4}
                 align='stretch'
                
             >
                 <Box fontWeight="bold" color={"white"}>
                     Explore
                 </Box>
                 <Box fontWeight="bold" color={"white"} >
                     Text to UI
                 </Box>
                 <Box fontWeight="bold" color={"white"} >
                     More
                 </Box>
             </VStack>
             <Spacer/>
             <Flex>
              <Stack direction={"row"} spacing='24px' marginEnd="0px" >
                 <Box fontWeight="bold" color={"white"}>
                    Blog
                 </Box>
                 <Box fontWeight="bold" color={"white"} >
                    Pricing
                 </Box>
                 <Box fontWeight="bold" color={"white"}>
                    Login
                 </Box>
                 <Button>Sign up</Button>
             </Stack>
 
             </Flex>
 
             </HStack>
            
   <Image width="90%"marginLeft={10} borderRadius={5} src='https://static7.depositphotos.com/1010683/702/i/450/depositphotos_7025209-stock-photo-cement-factory-at-night.jpg' alt='Dan Abramov' />
 
 </Stack>
 
 
 
 
 
     </>
 
     )
 }




