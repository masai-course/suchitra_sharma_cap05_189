
import { Routes, Route} from 'react-router-dom'

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Tickets from '../pages/Tickets'
import Login from '../pages/Login'
import TicketCreate from '../pages/TicketCreate'
import TicketEdit from '../pages/TicketEdit';
import TicketView from '../pages/TicketView';
import PageWrapper from './PageWrapper';


function AllRoutes() {

 return <>

      <Routes>
         <Route path="/" element={
          <PageWrapper>
                <Home />
         </PageWrapper>  
        
         } />
         <Route path="/contact" element={
            <PageWrapper>
                   <Contact />
            </PageWrapper>
        
         } />
         <Route path="/about" element={
            <PageWrapper>
               <About />
             </PageWrapper>
         
         } />
         <Route path="/tickets" element={
         <PageWrapper>
               <Tickets />
         </PageWrapper>
         
         } />
         <Route path="/login" element={<Login />} />
         <Route path="/tickets/create" element={
            <PageWrapper>
                   <TicketCreate />
            </PageWrapper>
       } />
         <Route path="/tickets/edit/:id" element={
             <PageWrapper>
                   <TicketEdit />
             </PageWrapper>
        
         } />
         <Route path="/tickets/view/:id" element={
            <PageWrapper>
                   <TicketView />
             </PageWrapper>
        
         } />
         
         

      </Routes>

   </>




}

export default AllRoutes