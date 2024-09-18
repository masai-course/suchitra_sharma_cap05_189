import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Advertisement from './components/Advertisement'
import Slider from './components/Slider'
import SliderSponsorProduct from './components/SliderSponsorProduct'
import Productsbar from './components/Productsbar'
import Paragraph from './components/Paragraph'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  
  return(
 
    <>
           
    <Header/>
     <Navbar/>   
    <Advertisement/>
       <Slider/>
       <Productsbar/>
       <SliderSponsorProduct/>
       <Paragraph/>
       <Footer/>
      
    
    </>
  )
}

export default App
