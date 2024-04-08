
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';
import team01 from '../../Assets/team/01.svg';

import team02 from '../../Assets/team/02.svg';

import team03 from '../../Assets/team/03.svg';

import team04 from '../../Assets/team/04.svg';

export default function Teampeople() {
    return (
      <>
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
       
        modules={[FreeMode]}
        className="mySwiper"

        
      >
        <SwiperSlide>
            <img src={team01} alt='ceo'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team02} alt='ceo'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team03} alt='ceo'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team04} alt='ceo'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={team01} alt='ceo'/>
        </SwiperSlide>
       
        
      </Swiper>
      </>
    );
  }
  