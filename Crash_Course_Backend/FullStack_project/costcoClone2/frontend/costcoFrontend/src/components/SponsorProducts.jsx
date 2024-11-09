
import { Image, Box, Grid, Text, Heading, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import axios from "axios"



export default function SponsorProducts() {

    const [post, setPost] = useState([])

    const fetchSponsorProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/sponsorProducts')
            setPost(response.data)

        } catch (error) {
            alert(`There is something error ${error}`)
        }

    }
    useEffect(() => {
        fetchSponsorProducts()
    }, [])


    return(
        // <div>
        //     <h3>Sponsor Products</h3>
        //     {
        //         post.map(post=>(
        //           <div key={post.id}>
        //             <h1>{post.discount}</h1>
        //             <img src={post.image}/>
        //             <h3>{post.description}</h3>
        //           </div>  
        //         ))
        //     }
                
                

        // </div>
        <Box padding="4" bg={"beige"} >
        <Heading as="h3" fontSize="2xl" mb="4" textAlign="center">
            Sponsor Products
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="6">
            {post.map(item => (
                <Box
                    key={item.id}
                    borderWidth="1px"
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="sm"
                    p="4"
                    bg="white"
                    _hover={{ boxShadow: "md" }}
                >
                    <Center mb="4">
                        <Image
                            src={item.image}
                            alt="Sponsor Product"
                            boxSize="150px"
                            objectFit="cover"
                            borderRadius="md"
                        />
                    </Center>
                    <Text fontSize="lg" fontWeight="bold" color="teal.600" mb="2">
                        {item.discount}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        {item.description}
                    </Text>
                </Box>
            ))}
        </Grid>
    </Box>
    )
    
        





        
    
}