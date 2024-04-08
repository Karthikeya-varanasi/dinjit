
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRef} from "react";
import 'swiper/css';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import Portfolio1 from '../../Assets/portfolio/project1.svg';

export default function Portfoliolist() {

    const swiperRefLocal = useRef()

    const handleMouseEnter = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.stop()
    };

    const handleMouseLeave = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.start()
    };
    return (
      <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        slidesPerView={1}
        ref={swiperRefLocal}
        freeMode={true}
        centeredSlides= {true}
        loop={true}  
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        
        
      >
        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>Karthik</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>

        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>durga</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>

        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>Karthik</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>

        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>Karthik</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>

        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>Karthik</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>

        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>Karthik</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>

        <SwiperSlide>
           <Link to='contact-us'>
           <img src={Portfolio1} alt='ceo'/>
           <div className='project-details'>
            <h3 className='Project-title'>Karthik</h3>
            <p className='projectdiscription'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           </div>
           </Link>
        </SwiperSlide>
       
        
      </Swiper>
      </div>
      
      </>
    );
  }
  