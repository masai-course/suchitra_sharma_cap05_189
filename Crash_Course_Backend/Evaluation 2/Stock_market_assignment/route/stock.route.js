import express from 'express'
import StockModel from '../model/stock.model.js'

const stockRouter=express.Router()

stockRouter.get('/', (req, res)=>{
    res.send('stockroute is here')
})

stockRouter.post('/post-stock', async (req, res)=>{
    const{stock_name, symbol, initial_price}=req.body
    try {
        const stock=new StockModel({
            stock_name, symbol, initial_price
        })

        await stock.save()
        res.status(201).json({'msg':"stock creation successfull"})

    } catch (error) {
            res.status(404).send(`There is some error while stock posting ${error}`)       
    }
})

stockRouter.get('/get-stock', async(req, res)=>{
    const {stock_name, symbol, initial_price}=req.body
    try {
        const AllStock=await StockModel.find({stock_name, symbol, initial_price})
        console.log(AllStock)
        res.status(200).json({
            'msg':"all stock is getting",
            AllStock
        })
  } catch (error) {
        res.status(404).send(`something is error while getting stocks ${error}`)
    }
})


stockRouter.patch('/update-stock/:_id', async(req, res)=>{
    
    const {_id}=req.params
    try {
        const updateStock=await StockModel.findByIdAndUpdate({_id:_id})
        res.status(201).json({
            'msg':"stock updation successfully",
            updateStock
        })

    } catch (error) {
        res.status(404).send(`There is some issuesin updation %{error}`)
    }
})



export default stockRouter