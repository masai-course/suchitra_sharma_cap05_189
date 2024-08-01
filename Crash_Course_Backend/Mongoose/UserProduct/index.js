const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/userProduct"
// const connection=require('./config/db')
// const UserModel=require('./models/user.model.js')
// const userRouter=require('./routes/user.routes')

const server = express()
const PORT = 3000

// userRouter.use(express.json())
server.use(express.json())

const userSchema = mongoose.Schema({     
    name: {type:String, unique:true, required:true},
    email: { type: String, required: true },
    age: Number,
    gender: String,
    contact: Number
}, {
    versionKey: false
})

userSchema.index({ name: 1 }, { unique: true });



const productSchema = mongoose.Schema({
    category:String,
    color: String,
    size: Number,
    amount: Number,
    brand: String
}, {
    versionKey: false
})


const UserModel = mongoose.model("user", userSchema)
const ProductModel = mongoose.model("product", productSchema)


server.post("/create-user", async (req, res) => {
    const {name, email, age, gender, contact}=req.body
    try {
        const user = new UserModel({
            name,
            email,
            age,
            gender,
            contact
        })

        await user.save()
        res.status(201).send("user creation success")
    } catch (error) {
        // if(error.code===11000)
        // {
        //     // console.log("duplicate username")
        //     res.status(409).send("username exist")
        // }
        // else{
            res.status(404).send(`error creation ${error}`)

        // }
            
    }
})

server.get('/get-user', async (req, res) => {
    try {
        const user=await UserModel.find()
        res.status(200).json({"msg":"users data fetched successfully", user})
    } catch (error) {
        res.status(404).send(`There is something ${error}`)
    }
    // res.send("get successfully")
})

server.put("/update-user/:_id", async(req, res)=>{

        const {_id}=req.params
        try {
            const updateUser=await UserModel.findByIdAndUpdate(
                {_id:_id}, req.body)
            res.status(200).json({
                "msg":"Updated Successfully", updateUser
            })
    } catch (error) {
         res.status(404).send(`error updating issue due to ${error}`)   
        }
})

server.delete("/delete-user/:_id", async(req, res)=>{

    const {_id}=req.params
    try {
        const deleteUser=await UserModel.findByIdAndDelete(
            {_id:_id}, req.body)
        res.status(200).json({
            "msg":"Deleted Successfully", deleteUser
        })
} catch (error) {
     res.status(404).send(`error deleting issue due to ${error}`)   
    }
})


server.post("/create-product", async(req, res)=>{
    const {category, color, size, amount, brand}=req.body
    try {
        const product=new ProductModel({
            category,
            color,
            size,
            amount,
            brand
        })
        await product.save()
        res.status(201).send("product creation successfully ")

} catch (error) {
        res.status(404)._construct(`There is something ${error}`)        
    }
})

server.get("/get-product", async(req, res)=>{
    try {
     const products=await ProductModel.find()
     res.status(200).json({
        "msg":"fetching the product data successfully", products
     })   

    } catch (error) {
        console.log(`There is something ${error}`)
    }
})

server.patch("/update-product/:_id", async(req, res)=>{
    const {_id}=req.params
    
    try {
        const updatedProduct=await ProductModel.findByIdAndUpdate({_id:_id}, req.body)    
        res.status(200).json({
            "msg":"Product data updated successfully", updatedProduct
        })
    } catch (error) {
        console.log(`There is something ${error}`)
    }
})

server.delete("/delete-product/:_id", async(req, res)=>{
    const {_id}=req.params
    
    try {
        const deletedProduct=await ProductModel.findByIdAndDelete({_id:_id}, req.body)    
        res.status(200).json({
            "msg":"Product data deleted successfully", deletedProduct
        })
    } catch (error) {
        console.log(`There is something ${error}`)
    }
})


















server.listen(PORT, async () => {
    console.log("connected to the server ")
    try {
        const connection = await mongoose.connect(url)
        // await connection
        console.log(`connecting to the db and server on port ${PORT}`)
    } catch (error) {
        console.log(`error something ${error}`)
    }


})


