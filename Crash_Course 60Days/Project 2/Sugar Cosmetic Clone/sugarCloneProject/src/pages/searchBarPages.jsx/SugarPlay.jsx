import { useState, useEffect } from "react"
import axios from "axios"
import SugarProductCard from "../../components/SugarProductsCard"
import { SimpleGrid, Container, Select, HStack } from "@chakra-ui/react"
import UpperNavbar from "../../components/UpperNavbar"
import SearchNavbar from "../../components/SearchNavbar"
import SearchNavbarLink from "../../components/SearchNavbarLink"
import AllRoutes from "../../components/AllRoutes"
import Slider from "../../components/Slider"
export default function SugarPlay() {

    const [products, setProducts] = useState([])
    const [sortOrderValue, setSortOrderValue]=useState("")

    async function fetchAndUpdateData(sortOrderValue) {
        try {
            let queryParam={}
            if(sortOrderValue)
                {
                    queryParam._sort="price",
                    queryParam._order=sortOrderValue
                }            

         let res = await axios({
                method: "get",
                url: "https://fakestoreapi.com/products",
                params:queryParam
            })
            // console.log(res)
            setProducts(res.data)
            console.log(products)
            // console.log(res.params)
            setSortOrderValue(res.params)

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchAndUpdateData(sortOrderValue)
    }, [sortOrderValue])

    return (
        <>
            <UpperNavbar />
            <SearchNavbar />
            <SearchNavbarLink />
            {/* <AllRoutes/>   */}
            <Slider />

            <Container maxW={"80%"}>
                <HStack>
                <Select placeholder='Sort By Price'>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                    
                </Select>
                <Select placeholder='Filter By Category'>
                    <option value='mens'>Men</option>
                    <option value='womens'>Women</option>
                    <option value='jewelery'>Jewellery</option>
                    <option value='electronics'>Electronics</option>
                </Select>

                </HStack>
                
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    {
                        products.map((ele) => (
                            <SugarProductCard {...ele} key={ele.id} />
                        ))


                    }
                </SimpleGrid>



            </Container>




        </>
    )
}