import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Image, Text, Box, HStack, VStack, UnorderedList, ListItem, Button, Input, InputGroup, InputLeftAddon, InputRightAddon, Center } from "@chakra-ui/react"
import Header from "../../Header"
import Navbar from "../../Navbar"
import Location from "../../Location"
import Footer from "../../Footer"


export default function ProductsDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(0)

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://costco-dbjson.vercel.app/GrocerySponsorProducts/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.log(`There is something issue in fetching the data ${error}`)
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])

    if (!product) {
        return (
            <h2>Loading product...</h2>
        )
    }



    const handlePrevBtn = () => {
        setCount((prevCount) => {
            if (prevCount > 0) {
                prevCount - 1
            }
            return 0

        })


    }

    const handleNextBtn = () => {
        setCount((prevCount) => prevCount + 1)
    }

    console.log("products")
    return (
        <>
            <Header />
            <Navbar />
            <Location />
            <h2>Product Details Here</h2>

            <Box
                w="100%"
                h="900px"
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
                boxShadow="lg"
                p={4}
                bg="white"
            >
                <HStack align="start" spacing={4}>
                    <Box
                        w="500px"
                        h="600px"

                    >
                        <Image
                            src={product.image}
                            alt={product.description}
                            boxSize="500px"
                            borderRadius="md"
                        
                        />

                    </Box>

                    <VStack
                        align="start"
                        spacing={2}
                        w="full"
                        maxW="400px"
                    >
                        <Text fontSize="30px" fontWeight="bold" noOfLines={2} >
                            {product.description}
                        </Text>
                        <Text color="green.500" fontSize="20px" fontWeight="bold">
                            Your Price: ${product.price}
                        </Text>
                        <Text color="red.500" fontSize="sm" fontWeight="bold">
                            Discount: {product.discount}%
                        </Text>
                        <Text color="yellow.500" fontSize="sm" fontWeight="bold">
                            Rating: {product.rating} ★
                        </Text>
                        <Text>
                            Features:
                        </Text>
                        <UnorderedList>
                            {product.features.map((features, index) => (
                                <ListItem key={index}>{features}</ListItem>
                            ))}
                        </UnorderedList>
                        <HStack>
                            <Button backgroundColor="lightgreen" color="black">Add To Cart</Button>
                            <Button backgroundColor="lightgreen" color="black">Delete From Cart</Button>

                        </HStack>

                    </VStack>
                    <VStack>
                        <Box
                            w="300px"
                            h="200px"
                            border="1px"
                            borderColor="green.300"
                            borderRadius="md"
                            boxShadow="lg"
                            p={4}
                            bg="white">
                            <div backgroundColor="red">
                                <h2>Delivery</h2>


                                <InputGroup marginBlockStart={"10px"} >
                                    <InputLeftAddon border="1px solid red" onClick={handlePrevBtn}>-</InputLeftAddon>
                                    <Input border="1px solid red" textAlign="center" placeholder={count} />
                                    <InputRightAddon border="1px solid red" onClick={handleNextBtn}>+</InputRightAddon>
                                </InputGroup>

                                <Button marginBlockStart="15px" backgroundColor="lightgreen" textAlign="center" w="250px">Add To Cart</Button>

                            </div>

                        </Box>
                        <Box
                            w="300px"
                            h="200px"
                            border="1px"
                            borderColor="green.300"
                            borderRadius="md"
                            boxShadow="lg"
                            p={4}
                            bg="white">
                           
                           <h2>Buy In Warehouse</h2>
                           
                           
                          <p> <span style={{color:"green", fontWeight:"bold"}}>In Stock </span>
                             at Seattle Warehouse pricing may vary
                           </p>

                        </Box>
                        <Box
                            w="300px"
                            h="200px"
                            border="1px"
                            borderColor="green.300"
                            borderRadius="md"
                            boxShadow="lg"
                            p={4}
                            bg="white">
                          
                          <p style={{fontSize:"25px" , color:"red"}}>Same-Day Delivery</p>
                          <p style={{fontSize:"18px"}}><span style={{color:"green"}}>Prices </span>and <span style={{color:"green"}}>Availability</span> Will Vary</p>

                        </Box>

                    </VStack>

                </HStack>
            </Box>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Footer />





        </>
    )
}