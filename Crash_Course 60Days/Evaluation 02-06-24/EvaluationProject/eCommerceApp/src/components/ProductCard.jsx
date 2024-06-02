import {Card, CardHeader, Heading, CardBody, 
    Stack, Box, Text, StackDivider, Button
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function ProductCard({title, category, price}){

    const navigate=useNavigate()
    const {id}=useParams()
    return(
        <>
        <Card>
  <CardHeader>
    <Heading size='md'>{title}</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         Category
        </Heading>
        <Text pt='2' fontSize='sm'>
          {category}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Price
        </Heading>
        <Text pt='2' fontSize='sm'>
          {price}
        </Text>
      </Box>
      
    </Stack>
  </CardBody>
  <Button colorScheme="red" onClick={()=>{
            navigate(`/products/${id}`)
            console.log("navigate")
  }}>
    More Details
  </Button>
</Card>
        </>
    )
}