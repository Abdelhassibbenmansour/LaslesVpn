import React from "react";

import {Images} from "../../constants";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="app__footer section__padding" id="help">
            <div className="app__footer-left">
                <div className="app__footer-left_logo">
                    <img src={Images.logo} alt="LaslesVpn logo" />
                </div>
                <div className="app__footer-left_text">
                    <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
                </div>
                <div className="app__footer-left_icons">
                    <img src={Images.Facebook} alt="Facbook logo" />
                    <img src={Images.Twitter} alt="Twitter logo" />
                    <img src={Images.Instagram} alt="Instagram logo" />
                </div>
                <div className="app__footer-left_copyright">
                    <img src={Images.copyright} alt="copyright" />
                </div>
            </div>
            <div className="app__footer-right">
                <div className="app__footer-right_bar">
                    <div className="title">Product</div>
                    <div className="text">Download </div>
                    <div className="text">Pricing</div>
                    <div className="text">Locations</div>
                    <div className="text">Server</div>
                    <div className="text">Countries</div>
                    <div className="text">Blog</div>
                </div>
                <div className="app__footer-right_bar">
                    <div className="title">Engage</div>
                    <div className="text">LaslesVPN ? </div>
                    <div className="text">FAQ</div>
                    <div className="text">Tutorials</div>
                    <div className="text">About Us</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Terms of Service</div>
                </div>
                <div className="app__footer-right_bar">
                    <div className="title">Earn Money</div>
                    <div className="text">Affiliate</div>
                    <div className="text">Become Partner</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;