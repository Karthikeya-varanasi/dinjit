import './Teams.css';
import Teampeople from './Teampeople';
const Teams = () => {
    return(
        <>


        <section className='Team-section default-style'>
                <div className='container-fluidd'>
                    <div className='services-handler'>
                        <div className='section-division'>
                            <h2 className='section-title' data-aos="fade-up" data-aos-duration="1500">Meet Our Team</h2>
                            <p className='section-para '  data-aos="fade-up" data-aos-duration="3000"    data-aos-delay="300">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prinvLorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>

                    </div>
                    <div className='default-style'>
                        <Teampeople />
                    </div>
                
                </div>
            </section>
       </>
    );
};
export default Teams;