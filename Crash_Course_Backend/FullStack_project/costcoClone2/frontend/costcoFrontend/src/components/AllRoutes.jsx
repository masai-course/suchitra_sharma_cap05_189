import { Routes, Route, Link} from "react-router-dom"
import Signup from "../page/Signup"
import Login from "../page/Login"
import Home from "./Home"
import CostcoNext from "./AllLinks/HeaderLink/CostcoNext"
import WhatsNew from "./AllLinks/HeaderLink/WhatsNew"
import WhileSuppliesLast from "./AllLinks/HeaderLink/WhileSuppliesLast"
import Grocery from "./AllLinks/NavbarLink/Grocery"
import SameDay from "./AllLinks/NavbarLink/SameDay"
import Shop from "./AllLinks/NavbarLink/Shop"
import ProductsDetail from "./AllLinks/NavbarLink/ProductsDetail"

export default function AllRoutes(){
    return(
    
        <>
        {/* <Link to="/">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/login">Login</Link> */}
        {/* <Link></Link> */}
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/costcoNext' element={<CostcoNext/>}/>
                    <Route path='/whatsNew' element={<WhatsNew/>}/>
                    <Route path='/whileSupplies' element={<WhileSuppliesLast/>}/>
                    <Route path='/grocery' element={<Grocery/>}/>
                    <Route path='/sameDay' element={<SameDay/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path="/product/:id" element={<ProductsDetail/>}/>
                    
                </Routes>
                

            
      
      
        </>
        
        
    
    )
}