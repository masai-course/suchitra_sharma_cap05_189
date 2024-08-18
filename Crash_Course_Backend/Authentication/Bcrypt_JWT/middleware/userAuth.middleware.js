
const jwt=require('jsonwebtoken')
// const dotenv=require('dotenv').config()

// const userAuthMiddleware=(req, res, next)=>{
//     const token=req.query.token
//     jwt.verify(token, 'masai', function(err, decode){
//         if(err){
//             res.send('unauthorized or login first')
//         }
//         if(decode){
//             req.body.name=decode.user.name
//             req.body.role=decode.user.role
//             res.send("you are logged in")
//         }
//         next()
//     })
// }

const userAuthMiddleware=(req, res, next)=>{
    const token=req.query.token
    jwt.verify(token, 'masai', (err, decoded)=>{                                             //process.env.SECRET_KEY
        if(err)
        {
            res.send('something is wrong')
        }
        if(decoded){
            // console.log(decoded)
            req.body.username=decoded.name
           req.body.role=decoded.role
            next()
        }
    })
   
}

module.exports=userAuthMiddleware