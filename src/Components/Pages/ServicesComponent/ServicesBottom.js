
import { Link } from "react-router-dom";
import './Service.css';
const ServicesBottom = () => {
    return(
        <>
        <div className="list-holder">
            <div className="services-list">
                    <Link to='sign-up'  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card">
                        <p class="card-title">Web Development</p>
                        <p class="small-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                        </div>
                    </Link>
                
                    <Link to='sign-up'  data-aos="fade-down" data-aos-duration="3000"> 
                        <div class="card">
                        <p class="card-title">Digital Marketing </p>
                        <p class="small-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                        </div>
                    </Link>
                
                    <Link to='sign-up'  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card">
                        <p class="card-title">Graphic Design</p>
                        <p class="small-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                        </div>
                    </Link>
                
                

            </div>
            
            <div className="services-list">
                    <Link to='sign-up'  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card">
                        <p class="card-title">Seo</p>
                        <p class="small-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                        </div>
                    </Link>
                
                    <Link to='sign-up' data-aos="fade-down" data-aos-duration="3000">
                        <div class="card">
                        <p class="card-title">Data Science</p>
                        <p class="small-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                        </div>
                    </Link>
                
                    <Link to='sign-up'  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card">
                        <p class="card-title">Networking</p>
                        <p class="small-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                        </div>
                    </Link>
                
                

            </div>
        </div>
        </>
    );
};
export default ServicesBottom;