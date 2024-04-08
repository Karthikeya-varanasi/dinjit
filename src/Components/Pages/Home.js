import React from 'react';
import Hero from './HeroComponent/Hero';
import Service from './ServicesComponent/Service';
import Aboutsection from './AboutComponent/About';
import Portfolio from './PortfolioComponent/Portfolio';
import Vedios from './vedioComponent/Vedio';
import Testimonals from './TestimonalsComponent/Testimonals';
import Footer from './FooterComponent/Footer';
export default function Home() {
  return(
    <>
    
      <Hero/>
      <main>
        <Service/>
        <Aboutsection/>
        <Portfolio/>
        <Vedios/>    
        <Testimonals/>
        <Footer/>
      </main>
    </>

  )
}
