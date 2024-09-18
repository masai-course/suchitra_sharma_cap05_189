import { BrowserRouter as Routes, Router, Route } from "react-router-dom"
import Signin from "../page/signin"

export default function AllRoutes(){
    return(
    
        <Router>
                <Routes>
                    <Route path='/signin' element={<Signin/>}/>
                </Routes>
                

            
      
      
        </Router>
        
        
    
    )
}