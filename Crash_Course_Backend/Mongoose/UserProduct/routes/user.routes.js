// const express=require('express')
// // const UserModel=require('../models/user.model.js')
// const UserModel=require('./index.js')
// const userRouter=express.Router()
// // userRouter.use(express.json())

// // userRouter.get('/', (req, res)=>{
// //     res.send("get succefully")
// //     // console.log("Get seuccesfull")
// // })


// userRouter.post("/", async (req, res) => {
//     const {name, email, age, gender, contact}=req.body
//     try {
//         const user = new UserModel({
//             name,
//             email,
//             age,
//             gender,
//             contact
//         })

//         await user.save()
//         res.status(201).send("user creation success")
//     } catch (error) {
//             res.status(404).send(`error creation ${error}`)
//     }
// })
// module.exports=userRouter

// userRouter.post("/create-user", async (req, res) => {
//     const {name, email, age, gender, contact}=req.body
//     try {
//         const user = new UserModel({
//             name,
//             email,
//             age,
//             gender,
//             contact
//         })

//         await user.save()
//         res.status(201).send("user creation success")
//     } catch (error) {
//             res.status(404).send(`error creation ${error}`)
//     }
// })

// userRouter.get('/get-user', async (req, res) => {
//     try {
//         const user=await UserModel.find()
//         res.status(200).json({"msg":"users data fetched successfully", user})
//     } catch (error) {
//         res.status(404).send(`There is something ${error}`)
//     }
//     // res.send("get successfully")
// })

// userRouter.put("/update-user/:_id", async(req, res)=>{

//         const {_id}=req.params
//         try {
//             const updateUser=await UserModel.findByIdAndUpdate(
//                 {_id:_id}, req.body)
//             res.status(200).json({
//                 "msg":"Updated Successfully", updateUser
//             })
//     } catch (error) {
//          res.status(404).send(`error updating issue due to ${error}`)   
//         }
// })

// userRouter.delete("/delete-user/:_id", async(req, res)=>{

//     const {_id}=req.params
//     try {
//         const deleteUser=await UserModel.findByIdAndDelete(
//             {_id:_id}, req.body)
//         res.status(200).json({
//             "msg":"Deleted Successfully", deleteUser
//         })
// } catch (error) {
//      res.status(404).send(`error deleting issue due to ${error}`)   
//     }
// })

