import express from 'express'
import connection from './config/db.js'
import userRouter from './route/user.route.js'
// import auth from './middleware/auth.middleware.js'
import stockRouter from './route/stock.route.js'

import dotenv from 'dotenv'
dotenv.config()

const server=express()
const PORT=process.env.PORT || PORT


server.use(express.json())
server.use('/user', userRouter)
server.use('/stock', stockRouter)

server.get('/', (req, res)=>{
    res.send('server is running fine')
})


server.listen(PORT, async(req, res)=>{

    try {
        await connection 
    console.log(`The server is connected to the DB and running on port ${PORT}`);
    
    } catch (error) {
       console.log(`There is something error ${error}`);
        
    }
    
    
})
