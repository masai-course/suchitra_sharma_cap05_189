const express = require('express')
const MovieModel = require('../models/movie.model.js')
const userAuthMiddleware = require('../middleware/userAuth.middleware.js')
const checkAdmin = require('../middleware/checkAdmin.middleware.js')
const jwt = require('jsonwebtoken')
const movieRouter = express.Router()

movieRouter.get('/get-movie',   async (req, res) => {                           // for home page , no  authentication needed

try {
    const AllMovies=await MovieModel.find()
    res.status(200).json({
        "msg":"Getting all movies",
        AllMovies
    })
} catch (error) {
    res.status(404).send(`There is something error ${error}`)
}

})

movieRouter.post('/create-movie',[userAuthMiddleware, checkAdmin], async (req, res) => {       // for creating movies 
    const { title, release_year, rating } = req.body

    try {
        const movies = new MovieModel({
            title, release_year, rating
        })

        await movies.save()
        res.status(201).json({
            "msg": "movies creation successfully",
            movies
        })


    } catch (error) {
        res.status(404).send(`There is something error to create a movies ${error}`)

    }

})

movieRouter.patch('/update-movie/:_id',[userAuthMiddleware, checkAdmin], async (req, res) => {     // for updating movie
    
    const {_id}=req.params
    try {
        const updatedMovie=await MovieModel.findByIdAndUpdate({_id:_id}, req.body)
        res.status(200).json({
            'msg':"movies updation success",
            updatedMovie
        })
    } catch (error) {
        res.status(500).send(`There is something issues in updation ${error}`)
    }

})


movieRouter.get('/cart', userAuthMiddleware, (req, res) => {                // for cart page

    res.send('cart page')
})

movieRouter.delete('/delete-movie/:_id',[userAuthMiddleware, checkAdmin], async (req, res) => {                // for cart page
    const {_id}=req.params
    try {
        const deleteMovie=await MovieModel.findByIdAndDelete({_id:_id}, req.body)
        res.status(201).json({
            "msg":"movie deletion success",
            deleteMovie
        })

    } catch (error) {
        res.status(404).send(`There is smething error in deletion ${error}`)
    }

})



module.exports = movieRouter