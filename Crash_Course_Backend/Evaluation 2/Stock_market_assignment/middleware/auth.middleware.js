import jwt from 'jsonwebtoken'
import UserModel from '../model/user.model'



const auth=async(req, res, next)=>{
    const {token}=req.header.authorization.split(" ")[1]
    if(!token)
    {
        res.status(404).send('You are not authenticated, please login first')
    }
   try {
        const decoded=jwt.verify(token, process.env.SECRET_KEY)
        if(!decoded){
            res.status(404).send('token not found')
        }
        else{
            const user=await UserModel.findById(decoded.id)
            res.user=user
            next()
        }
    
   } catch (error) {
        res.status(400).send(`There is something issues in authentication ${err}`)
   }

}

export default auth