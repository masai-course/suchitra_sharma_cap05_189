import { useNavigate } from "react-router-dom"
import Header from "../../Header"
import { useState, useEffect } from "react"
import Navbar from "../../Navbar"
import Location from "../../Location"
import Productsbar from "../../Productsbar"
import Paragraph from "../../Paragraph"
import Footer from "../../Footer"
import axios from "axios"
import { Box, Grid, Image, HStack, Button, VStack, Center, Text} from "@chakra-ui/react"

export default function Grocery() {

    const [showProducts, setShowProducts] = useState([])
    // const [slideImage, showSlideImage]=useState([])
    const [data, setData] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [showSliderProducts, setShowSliderProducts]=useState([])
    const [currentChunk, setCurrentChunk]=useState(0)
    const navigate=useNavigate()

    const fetchFrontProducts = async () => {
        try {
            const response = await axios.get("https://costco-dbjson.vercel.app/FrontProducts")
            setShowProducts(response.data)

        } catch (error) {
            console.log(`There is something error in fetching ${error}`)
        }


    }

    const fetchSlideData = async () => {
        try {
            const response = await axios.get("https://costco-dbjson.vercel.app/GrocerySliderProduct")
            setData(response.data)
        } catch (error) {
            console.log(`There is something error in fetching slides ${error}`)
        }
    }

    const fetchSliderProducts=async()=>{
        try {
            const response=await axios.get("https://costco-dbjson.vercel.app/GrocerySponsorProducts")
            setShowSliderProducts(response.data)
        } catch (error) {
            console.log(`There is something error ${error}`)
        }
    }

    useEffect(() => {
        fetchFrontProducts()
        fetchSlideData()
        fetchSliderProducts()
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length)
    }

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length)
    }

    const chunkArray=(array, size)=>{
            const chunks=[]
            for(let i=0; i<array.length; i+=size){
                chunks.push(array.slice(i, i+size)) 
            }
           return chunks   

    }

    const chunks=chunkArray(showSliderProducts, 4)

    const nextChunk=()=>{
        setCurrentChunk((prevChunk)=>(prevChunk+1) % chunks.length)
    }

    const previousChunk=()=>{
        setCurrentChunk((prevChunk)=>(prevChunk-1+chunks.length) % chunks.length)
    }

    const handleProductClick=(id)=>{
        navigate(`/product/${id}`)
    }

    if(chunks.length===0){
        return <Text>Loading slider products.....</Text>
    }
    if (data.length === 0) {
        return (
            <>
                <h3>Loading....</h3>
            </>
        )
    }


    return (
        <>
            <h1>Grocery</h1>
            {/* <button onClick={handleGrocery}>Grocery</button> */}
            {/* {showHeader && <Header/>} */}
            <Header />
            <Navbar />
            <Location />
            <hr />
            {/* ------------------------------------------------------------------------------------------------------------- */}
            <h1 style={{ fontSize: "30px", margin: "15px" }}>Grocery & Household Essentials</h1>
            <HStack direction={{ base: "column", md: "row" }} gap="10">

                {
                    showProducts.map(product => (
                        <div key={product.id}>
                            <Image
                                src={product.image}
                                boxSize="150px"
                                borderRadius="full"
                                fit="cover"
                                alt={product.title}

                            />
                            {product.title}

                        </div>
                    ))

                }

            </HStack>
            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            <VStack>
                <Image src={data[currentSlide].image} />

                <HStack>
                    <Button onClick={previousSlide}>Previous</Button>
                    <Button onClick={nextSlide}>Next</Button>
                </HStack>
            </VStack>
            {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
            <Productsbar/>   
            {/* ---------------------------------------------------------------------------------------------------------------------------------------  */}
            
            <Box padding="4" bg={"beige"} mt={5}  backgroundColor="whitesmoke">
                   <HStack>
                   <Button onClick={previousChunk}>&#10094;</Button>
    
                   <Button onClick={nextChunk}>&#10095;</Button>
                    </HStack> 
     
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="6">
            {chunks[currentChunk].map(item => (
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
                    {/* <Center mb="4"> */}
                        <Image
                            src={item.image}
                            alt="Sponsor Product"
                            boxSize="150px"
                            // objectFit="cover"
                            // borderRadius="md"
                            cursor="pointer"
                            onClick={()=>handleProductClick(item.id)}
                        />
                    {/* </Center> */}
                    <Text fontSize="lg" fontWeight="bold" color="teal.600" mb="2">
                        {item.leadTime}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        {item.price}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        {item.discount}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        {item.description}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        {item.rating}
                    </Text>
                </Box>
            ))}
        </Grid>
        
    </Box>

    {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <Paragraph />
    <Footer />



        </>
    )
}