import {Route, Routes} from 'react-router-dom'
import SugarPlay from '../pages/searchBarPages.jsx/SugarPlay'
import Lips from '../pages/searchBarPages.jsx/Lips'
import Eyes from '../pages/searchBarPages.jsx/Eyes'
import Face from '../pages/searchBarPages.jsx/Face'
import Nails from '../pages/searchBarPages.jsx/Nails'
import Skincare from '../pages/searchBarPages.jsx/Skincare'
import Accessories from '../pages/searchBarPages.jsx/Accessories'
import Gifting from '../pages/searchBarPages.jsx/Gifting'
import BestSeller from '../pages/searchBarPages.jsx/BestSeller'
import NewLaunches from '../pages/searchBarPages.jsx/NewLaunches'
import Offer from '../pages/searchBarPages.jsx/Offer'
import Blog from '../pages/searchBarPages.jsx/Blog'
import Login from '../pages/LoginSignin.jsx/Login'
import Home from '../pages/searchBarPages.jsx/Home'
// import Signin from '../pages/LoginSignin.jsx/Signin'

// import SearchNavbarLink from './SearchNavbarLink'




export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sugar/products" element={<SugarPlay/>}  />
            <Route path="/lips" element={<Lips/>}  />
            <Route path="/eyes" element={<Eyes/>}  />
            <Route path="/face" element={<Face/>}  />
            <Route path="/nails" element={<Nails/>}  />
            <Route path="/skincare" element={<Skincare/>}  />
            <Route path="/giftings" element={<Gifting/>}  />
            <Route path="/accessories" element={<Accessories/>}  />
            <Route path="/bestsellers" element={<BestSeller/>}  />
            <Route path="/newlaunches" element={<NewLaunches/>}  />
            <Route path="/offers" element={<Offer/>}  />
            <Route path="/blog" element={<Blog/>}  />
            {/* <Route path="/signin" element={<Signin/>}  /> */}
            <Route path="/login" element={<Login/>}  />

         </Routes>
        
        
        </>
    )
}