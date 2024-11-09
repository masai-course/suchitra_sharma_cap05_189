import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Advertisement from './components/Advertisement'
// import Slider from './components/Slider'
// import SliderSponsorProduct from './components/SliderSponsorProduct'
// import Productsbar from './components/Productsbar'
// import Paragraph from './components/Paragraph'
// import Footer from './components/Footer'
// import Signin from './page/signin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './page/Login';
import Signin from './page/Signin'
import AllRoutes from './components/AllRoutes';
import NavbarLink from './components/NavbarLink';
function App() {
   return(
 
    <>
    {/* <Signin/>        */}
    {/* <Header/>
     <Navbar/>   
    <Advertisement/>
       <Slider/>
       <Productsbar/>
       <SliderSponsorProduct/>
       <Paragraph/>
       <Footer/> */}
      {/* <Home/> */}
      {/* <Login/>
      <Signin/> */}
      <NavbarLink/>
      <AllRoutes/>
      

    
    </>
  )
}

export default App
