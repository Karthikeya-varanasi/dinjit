import {React, useState} from "react";
import {Link} from 'react-router-dom';
import {Button} from './Button';
import Dropdown from './Dropdown';
import logo from './Assets/logo/DINJIT.png';
import './Navbar.css';


function Navbar() {
    const[click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () =>setClick(false);
    
    const onMouseEnter = () =>{
        if (window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };


    const onMouseLeave = () =>{
        if (window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }


   return(
    <>

    <div className="headder-contain" data-aos="fade-down"  data-aos-duration="2000">
        <nav className='navbar' >
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src={logo}  data-aos="fade-down"  data-aos-duration="2000" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                 
            </div>
           <div >
            <ul className={click ? 'nav-menu active' : 'nav-menu'}  >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>   
                        <Link to='/Construction' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/Construction' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/Construction' className='nav-links' onClick={closeMobileMenu}>
                            CaseStudy
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/Construction' className='nav-links' onClick={closeMobileMenu}>
                            Contactus
                        </Link>
                    </li>
                    
                    
                </ul>
           </div>
            <Button />
        </nav>
    </div>
          
    </>
   )
};

export default Navbar;