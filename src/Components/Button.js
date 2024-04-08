import React from "react";

import { Link } from "react-router-dom";
import './Button.css';


export function Button() {
    return(
        <Link to='Construction' className="mobile">
         <button id="btn" data-aos="fade-down"  data-aos-duration="3000" >Sign Up</button>
        </Link>
    );
};

