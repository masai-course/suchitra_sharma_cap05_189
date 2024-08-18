const mongoose = require('mongoose')
const express = require('express')
const jwt=require('jsonwebtoken')
const userAuthMiddleware=require('../middleware/userAuth.middleware.js')
// const dotenv=require('dotenv').config()


const UserModel = require('../models/user.model.js')

const userRouter = express.Router()

userRouter.get('/get-user', async(req, res) => {


    try {
        const allUser=await UserModel.find()
        res.status(200).json({
            "msg":"Getting All Users",
            allUser
        })

    } catch (error) {
        console.log(`there is some error ${error}`);

    }
})


userRouter.post('/register', async (req, res) => {
    const { name, email, gender, password, role } = req.body

    try {
        const user = new UserModel({
            name, email, gender, password, role
        })

        await user.save()
        res.status(200).json({
            'msg': 'user registered successfully'
        })

    } catch (error) {
        res.status(500).send(`There is some issue to post the data`)
        console.log(`there is some error ${error}`);

    }
})

userRouter.post('/login', async (req, res) => {
    const {email, password } = req.body

    try {
         const user=await UserModel.findOne({email, password})
         if(!user){
           return res.status(404).send("Invalid credentials")
           
        }
        const token=jwt.sign({name:user.name, role:user.role}, 'masai', { expiresIn: '30s' })        //process.env.SECRET_KEY
        // console.log(token)
       
            res.status(200).json({
                "msg":"you are logged in",
                token
            })
       

    } catch (error) {
        res.status(500).send(`There is some issue to post the data`)
        console.log(`there is some error ${error}`);

    }
})

// userRouter.post('/login', async (req, res) => {
//     const {email, password } = req.body

//     try {

//         const user=await UserModel.findOne({email, password})

//         if(user){
//             res.send("user logged in")
//         }
//         else{
//             res.send("unauthorized please login first")
//         }

//     } catch (error) {
//         res.status(500).send(`There is soe issue to post the data`)
//         console.log(`there is some error ${error}`);

//     }
// })

module.exports = userRouter