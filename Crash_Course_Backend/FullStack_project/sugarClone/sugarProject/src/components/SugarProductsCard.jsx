import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,
    Button

} from "@chakra-ui/react"


export default function SugarProductCard({image,title, category, price }){
    return(
        <> 
       
        <Card maxW='lg'>
  <CardBody>
    <Image
      src={image}
    //   alt='Green double couch with wooden legs'
      borderRadius={"5px"}
      width={"120px"}
  
    />
    
    <Stack mt='6' spacing='3'>
      {/* <Heading size='md'>Living room Sofa</Heading> */}
      <Heading fontSize={"20px"}>
        {/* This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design. */}
        {title}
      </Heading>
      <Text color='blue.600' fontSize='2xl'>
        {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       {price}
      </Text>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
       
    
        </>
    )
}