
import { Link } from "react-router-dom";
const Vediotop = () => {
    return(
        <>   
        <div className="videotop" data-aos="fade-up">
            <div className="container-fluidd">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-xs-12 ">
                        <h4 >Like our creative works? Contact us and get free online consultation for your brand.</h4>
                    </div>
                    <div className="col-xl-6 col-md-6 col-xs-12 ">
                           <div className="ctabtn">
                                <Link to='sign-up' >
                                    <button id="btn">Know More about us</button>
                                </Link>
                           </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Vediotop;