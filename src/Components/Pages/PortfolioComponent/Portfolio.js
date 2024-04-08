import './Portfolio.css';
import Portfoliolist from './Portfoliolist';
const Portfolio = () => {
    return(
        <>

        <section className='Portfolio-section default-style'>
            <div className='container-fluidd'>
                <div className='services-handler'>
                    <div className='section-division'>
                        <h2 className='section-title' data-aos="fade-up" data-aos-duration="1500">Portfolio to Explore</h2>
                        <p className='section-para '  data-aos="fade-up" data-aos-duration="3000"    data-aos-delay="300">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prinvLorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className='default-style'  data-aos="fade-up" data-aos-duration="3000" >
                    <Portfoliolist/>
                </div>
            </div>
         
         
        </section>
        
        </>
    );
};
export default Portfolio;