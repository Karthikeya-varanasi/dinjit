import './About.css';
import AboutLeft from '../AboutComponent/AboutLeft';
import AboutRight from '../AboutComponent/AboutRight';
const Aboutsection = () => {
    return(
        <>
        <div className='about-section'>
        <AboutLeft/>
            <div className='container-fluidd  '>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-x-12'>
                   
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-x-12'>
                        <AboutRight/>
                    </div>
                    
                </div>
            </div>
        </div>        
        </>
    );
};
export default Aboutsection;