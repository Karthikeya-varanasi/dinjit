import React from 'react';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages//Home';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Casestudy from './Components/Pages/Casestudy';
import ContactUs from './Components/Pages/ContactUs';
import Construction from './Components/Pages/Construction';
import Headroom from 'react-headroom';
function App() {
  return (
   <>
      <Headroom>
          <Header />
      </Headroom>
      
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/casestudy' element={<Casestudy/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        
        <Route path='/Construction' element={<Construction/>} />
      </Routes>
   </>
  );
}

export default App;
