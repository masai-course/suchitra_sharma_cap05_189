const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')

const url="mongodb://127.0.0.1:27017/courseManagement"

const server=express()
const PORT=8080

server.use(express.json())

morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  })


const courseSchema=mongoose.Schema({
    id:String,
    title:String,
    category:String,
    difficulty:String,
    description:String

})

const userSchema=mongoose.Schema({
    id:String,
    username:String,
    password:String,
    enrolledCourses:String
})

const CourseModel=("course", courseSchema)
const UserModel=("user", userSchema)

server.get("/",async (req, res)=>{                          // get course model
    try {
        const course=await CourseModel.find()
        const content=`This is ${req.method} in ${req.url} and the time is ${Date.now()}`
        
        res.status(200).send(course, content)

    } catch (error) {
       res.status(404).send(`There is something ${error}`)
    }
})

server.post("/post-enroll", async(req, res)=>{              // post enrollment by authenticated user
    try {
        const user=new UserModel({
           id, username, password, enrolledCourses
        })
        await user.save()
         const content=`This is ${req.method} in ${req.url} and the time is ${Date.now()}`
        res.status(201).json({
            "msg":"user created",
            content
        })

    } catch (error) {
        res.status(400).send(`There is some issues `)
    }
}
)

server.delete("/post-cancel/:_id", async(req, res)=>{           // cancel the enrollment by users
    const {_id}=req.params
    try {
       const cancelEnroll=await UserModel.findByIdAndDelete({_id:_id}, cancelEnroll)
        const content=`This is ${req.method} in ${req.url} and the time is ${Date.now()}`
       res.status(204).send("cacel enrollment", content)

    } catch (error) {
        res.status(400).send(`There is some issues `)
    }
}
)

server.get("/my-courses", async(req, res)=>{                    // get the course by users

    try {
        const user=await UserModel.find()
         const content=`This is ${req.method} in ${req.url} and the time is ${Date.now()}`
        res.status(200).json({
            "msg":"getting courses",
            content
        })
    } catch (error) {
        
    }
})


server.listen(PORT, async()=>{
    try {
        const database=await mongoose.connect(url)
        console.log(`server is connected to the ${database} and runnig on port ${PORT}`)
       
    
    } catch (error) {
        console.log(error)
    }
})
