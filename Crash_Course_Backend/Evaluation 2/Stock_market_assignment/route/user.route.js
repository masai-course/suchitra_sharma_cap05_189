import express from "express";
import UserModel from "../model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('user route is here')
})

userRouter.post('/register', async (req, res) => {
    const { name, email, age, contact, id_card, password, confirmPassword } = req.body
    try {
        if (password === confirmPassword) {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    return res.status(500).send(`Internal server error ${err}`)
                }

                const user = new UserModel({
                    name,
                    email, age, contact, id_card, password: hash
                })

                await user.save()

                res.status(201).json({ 'msg': 'user registration successfull' })
             })
        }
        else {
            res.send('please type correct password')
        }
    } catch (error) {
        res.status(404).send(`There is something issue ${error}`)
    }
})

userRouter.post('/login', async(req, res)=>{
    const {email, password}=req.body
    try {
            const user=await UserModel.findOne({email})
            console.log(user)
            if(!user){
                return res.status(404).send('user not found')
            }
            if(user){
                bcrypt.compare(password, user.password, async(err, result)=>{
                    console.log(password,user.email,  user.password)
                    if(err){
                        res.send('password is not matching')
                    }
                    else{
                        
                        const token=jwt.sign({"name":"user.name"}, process.env.SECRET_KEY)
                        res.status(200).json({'msg':'logged in success', token})
                    }
                })

            }
            
    } catch (error) {
        console.log(`There is something error ${error}`);
    }
})

export default userRouter