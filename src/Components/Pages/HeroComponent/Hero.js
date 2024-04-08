
import backvideo from '../../Assets/bg-1.mp4';

import { Link } from "react-router-dom";
import './Hero.css';
const  Hero = () => {
    return(
        <>

        <video autoPlay loop muted id='video'  data-aos="zoom-in" >
            <source src={backvideo} type='video/mp4'/>
        </video>
        
        <div className='hero-section'>
       
       <div className='container-fluidd'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-x-12'>
                <div className='herobandler' data-aos="fade-up" data-aos-duration="3000" data-aos-offset="500"  >
                    <h1 className='title' >
                            Welcome to the <span>DINJIT</span>
                    </h1>
                    
                    <p className='discription'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <Link to='sign-up' >
                        <button id="btn">Know More</button>
                    </Link>
                </div>
            </div>
            
            <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12'>
            
            </div>
          </div>
       </div>
   </div>
        
        </>
    );
};
export default Hero;