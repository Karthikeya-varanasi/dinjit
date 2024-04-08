
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonals.css';
import 'swiper/css';
import { FreeMode, Autoplay } from 'swiper/modules';
import Portfolio1 from '../../Assets/testimonals/tm_avatar1.png';

export default function Testimonalslist() {

    
    return (
      <>
      <div  className='testimonals'>
      <Swiper
        slidesPerView={1}
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
                    <div class="bgdzin item">
                        <div class="card-image ">
                        <div class="">
                        <img src={Portfolio1} alt="" />
                        </div>                        
                        </div>

                        <div class="testimonals-body" >
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class=" checked"><i class="fa-solid fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <p class="card-text quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lorem vel lacus rhoncus ultrices elementum nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada ."</p>
                    
                                <h5 class="card-title">Proven Track Record</h5>
                        

                        </div>
                    </div>

        </SwiperSlide>

        <SwiperSlide>
                    <div class="bgdzin item">
                        <div class="card-image ">
                        <div class="">
                        <img src={Portfolio1} alt="" />
                        </div>                        
                        </div>

                        <div class="testimonals-body" >
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class=" checked"><i class="fa-solid fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <p class="card-text quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lorem vel lacus rhoncus ultrices elementum nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada ."</p>
                    
                                <h5 class="card-title">Proven Track Record</h5>
                        

                        </div>
                    </div>

        </SwiperSlide>


        <SwiperSlide>
                    <div class="bgdzin item">
                        <div class="card-image ">
                        <div class="">
                        <img src={Portfolio1} alt="" />
                        </div>                        
                        </div>

                        <div class="testimonals-body" >
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class=" checked"><i class="fa-solid fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <p class="card-text quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lorem vel lacus rhoncus ultrices elementum nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada ."</p>
                    
                                <h5 class="card-title">Proven Track Record</h5>
                        

                        </div>
                    </div>

        </SwiperSlide>


        <SwiperSlide>
                    <div class="bgdzin item">
                        <div class="card-image ">
                        <div class="">
                        <img src={Portfolio1} alt="" />
                        </div>                        
                        </div>

                        <div class="testimonals-body" >
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class=" checked"><i class="fa-solid fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <p class="card-text quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lorem vel lacus rhoncus ultrices elementum nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada ."</p>
                    
                                <h5 class="card-title">Proven Track Record</h5>
                        

                        </div>
                    </div>

        </SwiperSlide>

        <SwiperSlide>
                    <div class="bgdzin item">
                        <div class="card-image ">
                        <div class="">
                        <img src={Portfolio1} alt="" />
                        </div>                        
                        </div>

                        <div class="testimonals-body" >
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class="checked"><i class="fa-solid fa-star"></i></span>
                                <span class=" checked"><i class="fa-solid fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <span class=""><i class="fa-regular fa-star"></i></span>
                                <p class="card-text quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lorem vel lacus rhoncus ultrices elementum nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada ."</p>
                    
                                <h5 class="card-title">Proven Track Record</h5>
                        

                        </div>
                    </div>

        </SwiperSlide>



      </Swiper>
      </div>
      
      </>
    );
  }
  