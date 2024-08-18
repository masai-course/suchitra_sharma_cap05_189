const express=require('express')
const connection=require('./config/db.js')
const userRouter=require('./routes/user.route.js')
// const userAuthMiddleware=require('./middleware/userAuth.middleware.js')
// const checkAdmin=require('./middleware/checkAdmin.middleware.js')
const movieRouter=require('./routes/movie.route.js')


const server=express()
const PORT=process.env.PORT || 3000

server.use(express.json())
server.use("/user", userRouter)
server.use("/movie", movieRouter)


server.get('/', (req, res)=>{                               // for verifying
    res.send("hey this is working fine")
})

server.get('/home', (req, res)=>{                           // for home page , no  authentication needed

    res.send("you have landed on home page")
   
})

// server.get('/get-movie',userAuthMiddleware, (req, res)=>{       // for getting movies 
//     console.log(req.body)
//     res.send('get movies data...')
  
//   })

// server.patch('/update-movie', [userAuthMiddleware, checkAdmin], (req, res)=>{     // for updating movie
//         console.log(req.body)
//     res.send("movie updated")
// })


// server.get('/cart',[userAuthMiddleware, checkAdmin],(req, res)=>{                // for cart page

//     res.send('cart page')
// })

// server.delete('/delete-movie', [userAuthMiddleware, checkAdmin],(req, res)=>{                // for cart page

//     res.send('delete this page')
// })

server.listen(PORT, async(req, res)=>{
 try {
        await connection 
     console.log(`server is connected to the db and running on port ${PORT}`)
 } catch (error) {
    console.log(`There is something error ${error}`);
    
 }
    
})