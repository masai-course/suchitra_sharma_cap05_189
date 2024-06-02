
import { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import { SimpleGrid, Container } from "@chakra-ui/react"
import { Select, HStack } from "@chakra-ui/react"
import { useParams } from "react-router-dom"




export default function Home() {

    const [products, setProducts] = useState([])
    const [sortOrderValue, setSortOrderValue]=useState([])
    const [filterValue, setFilterValue]=useState([])



    async function fetchProductData() {

        try {
          
            
              let res = await axios({
                method: "get",
                url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"


            })
            console.log(res.data)
            setProducts(res.data.data)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    console.log(products)

    return (
        <Container maxW="80%" bg="lightcyan">
            <HStack>
            <Select placeholder='Sort by Price' bg="lightcoral" value={sortOrderValue}
                onChange={(e)=>{
                    setSortOrderValue(e.target.value)
                }}
            >
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
               
            </Select>
            <Select placeholder='Filter by Category' bg="lightcoral" value={filterValue}
                onChange={(e)=>{
                    setFilterValue(e.target.value)
                }}
            >
                <option value='men'>Men</option>
                <option value='women'>Women</option>
                <option value='kids'>Kids</option>
                <option value='home decor'>Home Decor</option>
            </Select>

            </HStack>
           

            <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }} spacing={4}>
                {products.map((ele, id) => (
                    <ProductCard key={ele.id} title={ele.title} category={ele.category}
                        price={ele.price}
                    />
                ))
                }

            </SimpleGrid>


        </Container>
    )
}