const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/MovieStore"

const server = express()
const PORT = 8080


server.use(express.json())
server.use(express.Router())

const movieSchema = mongoose.Schema({
    movie_id: Number,
    title: String,
    release_year: Number,
    rating: Number
})

const MovieModel = mongoose.model("movie", movieSchema)


server.get('/movie', async (req, res) => {

    try {
        const movieStrore = await MovieModel.find()
        // const movieStrore=await MovieModel.aggregate([{$project:{"release_year":1}}])
        // const movieStrore=await MovieModel.aggregate([{$match:{"title":{$regex:"dho"}}}])
        res.status(200).json({
            "msg": "Getting movies successfully",
            movieStrore
        })


    } catch (error) {
        res.status(404).send(`Page not Found ${error}`)
    }
})

//search the movie
// server.get('/movie/', async (req, res) => {
//         const {query}=req.query
//         if(query){
//             result=query
//         }
//     try {
//         const movieStrore = await MovieModel.find()
//         console.log(movieStrore)
//         res.status(200).json({
//             "msg": "Getting movies successfully",
//             movieStrore
//         })


//     } catch (error) {
//         res.status(404).send(`Page not Found ${error}`)
//     }
// })


// filter by title and sorting
server.get('/movie/', async (req, res) => {

    const { title, rating, sortBy,  order="asc", search } = req.query
    const filterQuery = {}
    if (title) {
        filterQuery.title = title
    }

    if (rating) {
        filterQuery.rating = rating
    }

    const sortQuery={}
    if(sortBy)
    {
        sortQuery[sortBy]= order==="asc"? 1 : -1
    }
 console.log(filterQuery)
    try {

    const filterSortMovie = await MovieModel.find(filterQuery).sort(sortQuery)
        // console.log(filterMovieByTitle)
        res.status(200).json({
            "msg": "Getting movies ",
            filterSortMovie
            
        })
    } catch (error) {
        res.status(400).send(`There is something issues ${error}`)
    }
})




server.post("/post-movie", async (req, res) => {

    const { movie_id, title, release_year, rating } = req.body
    try {
        const movies = new MovieModel({
            movie_id,
            title,
            release_year,
            rating
        })

        await movies.save()
        res.status(201).json({
            "msg": "movies added successfully"
        })

    } catch (error) {
        res.status(400).send(`There is something ${error}`)
    }


})


server.put('/update-movie/:_id', async (req, res) => {
    const { _id } = req.params

    try {
        const updatedMovie = await MovieModel.findByIdAndUpdate({ _id: _id }, req.body)
        res.status(200).json({
            "msg": "movies updation success",
            updatedMovie
        })


    } catch (error) {
        res.status(404).send(`There is something issues in updation ${error}`)
    }

})

server.delete('/delete-movie/:_id', async (req, res) => {
    const { _id } = req.params

    try {
        const deletedMovie = await MovieModel.findByIdAndDelete({ _id: _id }, req.body)
        res.status(200).json({
            "msg": "movies deletion success",
            deletedMovie
        })


    } catch (error) {
        res.status(404).send(`There is something issues in deletion ${error}`)
    }

})


server.listen(PORT, async (req, res) => {
    try {
        const database = await mongoose.connect(url)
        console.log(`Server is connection to the ${database} and running on port ${PORT}`)


    } catch (error) {

    }

})