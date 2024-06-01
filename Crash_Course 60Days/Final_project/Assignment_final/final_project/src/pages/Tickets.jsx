
import {
  Button, Container,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Heading,
  Text,
  Select,
  SimpleGrid,
  HStack,

} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import LoadingIndicator from "../components/LoadingIndicator"
// import ErrorIndicator from "../components/ErrorIndicator"



function TicketCard({id, title, status, priority }) {

  const navigate = useNavigate()
  return (

    <Card>
      <CardHeader>
        <Heading size='md'>Id:-{id}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              {title}
            </Heading>
            {/* <Text pt='2' fontSize='sm'>
             View a summary of all your clients over the last month.
           </Text> */}
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Status
            </Heading>
            <Text pt='2' fontSize='sm'>
              {status}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Priority
            </Heading>
            <Text pt='2' fontSize='sm'>
              {priority}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <Button colorScheme="red" borderRadius={7} onClick={() => {
        navigate(`/tickets/view/${id}`)
      }}>
        View Ticket
      </Button>
    </Card>)
}


function Tickets() {

  const navigate = useNavigate()
  const [ticket, setTicket] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [sortOrderValue, setSortOrderValue]=useState("")
  const [filterValue, setFilterValue]=useState("")



  async function fetchAndUpdateData(sortOrderValue, filterValue) {
    setLoading(true)
    try {
      let queryParam={}
      if(sortOrderValue){
        queryParam._sort="priority",
        queryParam._order=sortOrderValue
      }
      if(filterValue){
        queryParam._status=filterValue
      }
      let res = await axios({
        method: "get",
        url: " http://localhost:3000/tickets",
        params:queryParam,

      })
      setLoading(false)
      setTicket(res.data)
      console.log(ticket)
      console.log(res.param)
    } catch (error) {
      setLoading(false)
      setErr(error)

    }

  }

  useEffect(() => {
    fetchAndUpdateData(sortOrderValue, filterValue)
  }, [sortOrderValue, filterValue])


  if (loading) {
    return <LoadingIndicator />
  }


  if (err) {
    retrun(
      alert("something went wrong")
    )
  }

  // function loadingIndicator() {
  //   return <Spinner
  //    size='xl'
  //   />
  // }

  return (
    <Container maxW='900px' bg='blue.600'>

      <Button colorScheme="red" borderRadius={7} onClick={() => {
        navigate('/tickets/create')
      }}>

        Create Tickets
      </Button>
      <HStack>
        <Select placeholder='Sort By Priority' bg={"lightGray"}
          value={sortOrderValue} onChange={(e)=>{
              setSortOrderValue(e.target.value)
             
          }}  
        >
          <option value='asc'>Low to High</option>
          <option value='oesc'>High to Low</option>
         
        </Select>
        <Select placeholder='Filter By Status' bg={"lightGray"} value={filterValue}
          onChange={(e)=>{
            setFilterValue(e.target.value)
            console.log(e.target.value)
          }} >
          <option value='pending'>Pending</option>
          <option value='progress'>Progress</option>
          <option value='completed'>Completed</option>
        </Select>

      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
        {ticket?.map((ele) =>
          (<TicketCard {...ele} key={ele.id} />)

        )}

      </SimpleGrid>
    </Container>
  )


}

export default Tickets