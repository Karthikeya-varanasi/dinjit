import './Vedio.css';

import backvideo from '../../Assets/bg-2.mp4';
import Vediotop from './Vediotop';
const Vedios = () => {
    return(
        <>   
        <div className='video-section' >
            <Vediotop/>

            <div className='subject-video default-style'>
                <div className='video-data'>
                    <video autoPlay loop muted>
                        <source src={backvideo} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
        </>
    );
};
export default Vedios;