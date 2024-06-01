import {
    Container, VStack, Input,
    Select, Button,
    background
} from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"




function TicketCreate() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [assignee, setAssignee] = useState("")
    const [status, setStatus] = useState("")
    const [priority, setPriority] = useState("")
    const navigate = useNavigate()

    async function handleSubmit() {
        try {

            let newTicket = {
                title,
                description,
                assignee,
                status,
                priority
            }

            let res = await axios({
                method: "post",
                url: "http://localhost:3000/tickets",
                data: newTicket
            })
            console.log(res)

            navigate('/tickets')


        } catch (error) {
            console.log(error)

        }


    }

    return (
        <Container >
            {/* <h1>Ticket Create</h1> */}
            <VStack spacing={5} padding={10} bg={"gray"}>
                <Input variant='filled' placeholder='Enter Title'
                    value={title} onChange={(e) => {
                        setTitle(e.target.value)
                        console.log(title)
                    }} />
                <Input height="100px" variant='filled' placeholder='Enter Description'
                    value={description} onChange={(e) => {
                        setDescription(e.target.value)
                        console.log(description)
                    }}
                />
                <Select placeholder='Select Assignee' value={assignee}
                    onChange={(e) => {
                        setAssignee(e.target.value)
                        // console.log(assignee)
                    }}
                >

                    <option value='John Doe'>John Doe</option>
                    <option value='Jane Smith'>Jane Smith</option>
                    <option value='Alice Johnson'>Alice Johnson</option>

                </Select>

                <Select placeholder='Select status' value={status}
                    onChange={(e) => {
                        setStatus(e.target.value)
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
                        setPriority(e.target.value)
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
                    onClick={handleSubmit}

                >Create Ticket</Button>
            </VStack>


        </Container>
    )


}

export default TicketCreate