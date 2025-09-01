import React, {useState} from "react";
// import ReactDom from 'react-dom/client';

import { CgMenu} from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
    const [menuLinks,setMenuLinks] = useState(false);

    return (
        <nav className="app__navbar section__padding">
            <div className="app__navbar-img">
                <img src={Images.logo} alt="logo img" />
            </div>
            <div className="app__navbar-links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#help">Help</a></li>
                </ul>
            </div>
            <div className="app__navbar-sign">
                <div className="app__navbar-sign_in">Sign In</div>
                <div className="app__navbar-sign_up">Sign Up</div>
                {menuLinks ? <IoMdClose className="menu-icon" style={{fontSize: 30,zIndex: 50,}} onClick={() => setMenuLinks(false)} /> 
                : <CgMenu className="menu-icon" style={{fontSize: 30,zIndex: 50,}} onClick={() => setMenuLinks(true)} />}
            </div>
            {menuLinks && (
                    <div className="app__navbar-links_smallscreen">
                        <ul>
                            <li><a href="#about" onClick={() => setMenuLinks(false)}>About</a></li>
                            <li><a href="#features" onClick={() => setMenuLinks(false)}>Features</a></li>
                            <li><a href="#pricing" onClick={() => setMenuLinks(false)}>Pricing</a></li>
                            <li><a href="#testimonials" onClick={() => setMenuLinks(false)}>Testimonials</a></li>
                            <li><a href="#help" onClick={() => setMenuLinks(false)}>Help</a></li>
                        </ul>
                        <div className="app__navbar-sign_in">Sign In</div>
                        <div className="app__navbar-sign_up">Sign Up</div>
                    </div>
                )}
        </nav>
    );
};

export default Navbar;