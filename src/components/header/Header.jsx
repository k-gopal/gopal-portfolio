import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import '../styles/header.css';
import logo from '../../static/logo.png';

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(!isMobile);

    const handleHamburger = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (<>
        <header className='header_header'>
            <nav className='header_navbar'>
                <a href='/' className='navbar-brand header_nav-logo dukeBlue'>
                    <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-center me-2"/>
                    Gopal Khichar
                </a>
                <ul className={`header_nav-menu ${navbarOpen && 'header_active'}`}>
                    <li className='header_nav-item'>
                        <a href='#experience' className='header_nav-link'>
                            Experience
                        </a>
                    </li>
                    <li className='header_nav-item'>
                        <a href='#education' className='header_nav-link'>
                            Education
                        </a>
                    </li>
                    <li className='header_nav-item'>
                        <a href='#projects' className='header_nav-link'>
                            Projects
                        </a>
                    </li>
                    <li className='header_nav-item'>
                        <a href='#testimonials' className='header_nav-link'>
                            Testimonials
                        </a>
                    </li>
                    <li className='header_nav-item'>
                        <a href='#extras' className='header_nav-link'>
                            Extras
                        </a>
                    </li>
                    <li className='header_nav-item'>
                        <a href='#contact' className='header_nav-link'>
                            Contact
                        </a>
                    </li>
                </ul>
                <div className={`header_hamburger ${navbarOpen && 'header_active'}`} onClick={() => handleHamburger()}>
                    <span className='header_bar'></span>
                    <span className='header_bar'></span>
                    <span className='header_bar'></span>
                </div>
            </nav>
        </header></>
    );
};

export default Header;
