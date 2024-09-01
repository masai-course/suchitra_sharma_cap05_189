
const checkAdmin=async(req, res, next)=>{
    if(req.body.role==='admin'){
        next()
    }
    else{
    res.status(404).send(`You are not authorized to access this routes`)
    }
}

export default checkAdmin 