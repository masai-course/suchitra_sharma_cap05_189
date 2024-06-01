
import { Container, VStack, Input,
    Select, Button,
    Spinner} 
    from "@chakra-ui/react"

  import { useParams } from "react-router-dom"
  import { useState, useEffect } from "react"
  import axios from "axios"
  import { useNavigate } from 'react-router-dom'
  

function TicketEdit(){
    const navigate=useNavigate()
    const {id}=useParams()
    const[loading, setLoading]=useState(false)
    const[err, setErr]=useState(false)
    const [ticket, setTicket]=useState({})


    async function fetchAndUpdateData(id){
        setLoading(true)
        try {
            let res=await axios({
                method:"get",
                url: ` http://localhost:3000/tickets/${id}`
            })
             let data=res.data
            setLoading(false)
            setTicket(data)
            console.log(ticket)

        } catch (error) {
            setLoading(true)
            console.log(error)

        }
    }

    useEffect(()=>{
        fetchAndUpdateData(id)
    }, [id])


    async function handleEditTicket(){
        try {
            let updatedTicket = {
               
                title:ticket.title,
                description:ticket.description,
                assignedUser:ticket.assignedUser,
                status:ticket.status,
                priority:ticket.priority
            }

                let res= await axios.patch(`http://localhost:3000/tickets/${id}`,updatedTicket)
                // ({
                //     method:"patch",
                //     url:`http://localhost:3000/tickets/${id}`,
                //     params:updatedTicket
                // })
                console.log(res)
              
              
                if(res.status===200)
                    {
                        navigate("/tickets")
                    }
            
        } catch (error) {
            console.log(error)
            setErr(error)
        }
    }

    if(loading){
        <Spinner/>
    }
    const { title, description, status, priority, assignedUser } = ticket
    return (
        <Container >
        {/* <h1>Ticket Create</h1> */}
        <VStack spacing={5} padding={10} bg={"gray"}>
            <Input variant='filled' placeholder='Enter Title'
                value={title} onChange={(e) => {
                    setTicket({
                        ...ticket,
                        title: e.target.value
                    })
                  
                }} />
            <Input height="100px" variant='filled' placeholder='Enter Description'
                value={description} onChange={(e) => {
                    setTicket({
                        ...ticket,
                        description:e.target.value
                    })
                   
                }}
            />
            <Select placeholder='Select AssignedUser' value={assignedUser}
                onChange={(e) => {
                    setTicket({
                        ...ticket,
                        assignedUser:e.target.value
                    })
                    // console.log(assignee)
                }}
            >

                <option value='John Doe'>John Doe</option>
                <option value='Jane Smith'>Jane Smith</option>
                <option value='Alice Johnson'>Alice Johnson</option>

            </Select>

            <Select placeholder='Select status' value={status}
                onChange={(e) => {
                    setTicket({
                        ...ticket,
                        status:e.target.value
                    })
                    // console.log(status)
                    // console.log(e.target.value)
                }}
            >
                <option value='pending'>Pending</option>
                <option value='progress'>Progress</option>
                <option value='completed'>Completed</option>
            </Select>
            <Select placeholder='Select priority' value={priority}
                onChange={(e) => {
                    setTicket({
                        ...ticket,
                        priority:Number(e.target.value)
                    })
                    // console.log(priority)
                }}
            >
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </Select>
            <Button colorScheme="red" borderRadius={7}
                onClick={handleEditTicket}

            >Edit Ticket</Button>
        </VStack>


    </Container>
    )  
   }
   
   export default TicketEdit