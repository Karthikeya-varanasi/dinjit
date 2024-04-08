

import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";

import skill1  from  "../../Assets/clients/figma.svg";
import skill2  from  "../../Assets/clients/Premier_pro.svg";
import skill3  from  "../../Assets/clients/Photoshop.svg";
import skill4  from  "../../Assets/clients/illustrator.svg";


const AboutRight = () => {
    return(
        <>
          <div className="about-left">
                    <div className='section-divisiontype-two'>
                        <h2 className='section-titletype-two' data-aos="fade-up" data-aos-duration="1500">About us</h2>
                    </div>

                    <div className="about-details">
                        <div className="discription">
                            <p  data-aos="fade-up" data-aos-duration="3000" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <Link to='sign-up' >
                                <button id="btn">Know More about us</button>
                            </Link>
                        </div>
                    </div>

                   <div className="clients"> 
                    <div className='section-divisiontype-two'>
                            <h2 className='section-titletype-two' data-aos="fade-up" data-aos-duration="1500">Our Clients</h2>
                        </div>

                        <Marquee>
                            <div className="marue_slide">
                                <img src={skill1}/>
                                
                            </div>
                            <div className="marue_slide">
                                <img src={skill4}/>
                                
                            </div> 
                            <div className="marue_slide">
                                <img src={skill2}/>
                                
                            </div>
                            <div className="marue_slide">
                                <img src={skill3}/>
                                
                            </div>
                            
                        </Marquee>

                   </div>
            </div>
        </>
    );
};
export default AboutRight;