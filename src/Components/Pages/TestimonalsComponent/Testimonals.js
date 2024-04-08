import './Testimonals.css';
import Testimonalslist from './Testimonalslit';
const Testimonals = () => {
    return(
        <>

        <section className='testimonals-section default-style'>
            <div className='container-fluidd'>
                <div className='services-handler'>
                    <div className='section-division'>
                        <h2 className='section-title' data-aos="fade-up" data-aos-duration="1500">Portfolio to Explore</h2>
                    </div>
                </div>
                <div className='default-style'  data-aos="fade-up" data-aos-duration="3000" >
                    <Testimonalslist/>
                </div>
            </div>
         
         
        </section>
        
        </>
    );
};
export default Testimonals;