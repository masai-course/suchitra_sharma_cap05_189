import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'



export default function AllRoutes(){
        return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
               

            </Routes>
        )
}