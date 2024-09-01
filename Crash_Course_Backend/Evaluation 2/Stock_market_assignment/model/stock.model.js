import mongoose from 'mongoose'


const stockSchema=mongoose.Schema({
    "stock_name":{type:String},
    "symbol":{type:String},
    "initial_price":{type:Number}
})

const StockModel=mongoose.model('stock', stockSchema)

export default StockModel