import {
  Card, CardHeader, Heading, CardBody,
  Stack, StackDivider,
  Box, Text, Container, Button, HStack, Spinner
} from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function TicketView() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [ticket, setTicket] = useState({})
  const navigate=useNavigate()



  async function fetchAndUpdateData(id) {
    setLoading(true)
    try {
      let res = await axios({
        method: "get",
        url: ` http://localhost:3000/tickets/${id}`
      })
      setLoading(false)
      setTicket(res.data)
      console.log(res.data, id)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  if(loading){
    <Spinner />
  }
   


  useEffect(() => {
    fetchAndUpdateData(id)
  }, [id])
 
 
  async function handleDeleteTicket(){
    try {
      let res=await axios({
        method:"delete",
        url:` http://localhost:3000/tickets/${id}`
      })
      if(res.status===200){
        navigate("/tickets")
      }
      
    } catch (error) {
      console.log(error)
      setLoading(false)

    }
   
    
  }


  const { title, description, status, priority, assignedUser } = ticket
  return (
    <Container>

      <Card>
        <CardHeader>
          <Heading size='md'>{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Description
              </Heading>
              <Text pt='2' fontSize='sm'>{description}
              </Text>
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
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                AssignedUser
              </Heading>
              <Text pt='2' fontSize='sm'>
                {assignedUser}
              </Text>
            </Box>

          </Stack>
          <br />
          <HStack>
            <Button colorScheme="red" borderRadius={7} onClick={() => {
                navigate(`/tickets/edit/${id}`)
            }}>
              Edit Ticket
            </Button>  <Button colorScheme="red" borderRadius={7} onClick={handleDeleteTicket}>
               Delete Ticket
            </Button>
          </HStack>

        </CardBody>
      </Card>


    </Container>
  )


}

export default TicketView