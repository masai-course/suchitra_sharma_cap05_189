import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpperNavbar from './components/UpperNavbar'
import SearchNavbar from './components/SearchNavbar'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import SearchNavbarLink from './components/SearchNavbarLink'


import Slider from './components/Slider'
import BestSellerSlider from './components/BestSellerSlider'
import ExclusiveSlider from './components/ExclusiveSlider'
import ClubVelvetSlide from './components/ClubVelvetSlide'
import Subscriber from './components/Subscriber'
import Footer from './components/Footer'
import SugarPlay from './pages/searchBarPages.jsx/SugarPlay'
import Home from './pages/searchBarPages.jsx/Home'
import { useNavigate, useLocation} from 'react-router-dom'
import Login from './pages/LoginSignin.jsx/Login'

// import Signin from './pages/LoginSignin.jsx/Signin'
function App() {
  // const navigate=useNavigate()
  const location=useLocation()
 

  return (
    <>
     {/* <UpperNavbar/>
      <SearchNavbar />
     
   
      <SearchNavbarLink/> 
    <AllRoutes/> */}
     {location.pathname==="/"?<Home/> : <SugarPlay/>}
     {/* {location.pathname==="/" && <Home/>} */}
    {/* <Home/> */}
     {/* <SugarPlay/> */}
      {/* <Slider/>
      <BestSellerSlider/>
      <ExclusiveSlider/>
      <ClubVelvetSlide/>
      <Subscriber/>
      <Footer/> */}
    </>
  )
}

export default App
