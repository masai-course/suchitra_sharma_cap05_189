const mongoose=require('mongoose')


const movieSchema=mongoose.Schema({
  
    title: String,
    release_year: Number,
    rating: Number
})

const MovieModel=mongoose.model("movie", movieSchema)

module.exports=MovieModel