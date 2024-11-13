import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpperNavbar from './components/UpperNavbar'
import SearchNavbar from './components/SearchNavbar'
import Home from './pages/searchBarPages.jsx/Home'
import Signin from './pages/LoginSignin.jsx/Signin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRoutes from './components/AllRoutes'
import { useLocation } from 'react-router-dom'
function App() {

  const location=useLocation()

  return (
  
      //   <Router>
     
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/signin" element={<Signin />} />
      //     {/* Add other routes here */}
      //   </Routes>
      // </Router>
    
  
  // <Router>
  // <UpperNavbar/>
  // <SearchNavbar/>
  
  // <AllRoutes/>
  // </Router>
    
   <>
 
 {location.pathname==="/"?<Home/> : <Signin/>}

   </>
  )
}

export default App
