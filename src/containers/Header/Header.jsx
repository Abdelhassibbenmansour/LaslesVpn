import React from "react";

import {Images} from "../../constants"
import { Informations } from "../../components";
import "./Header.css";

const Header = () => {
    return (
        <div className="app__header section__padding" id="home">
            <div className="app__header-top">
                <div className="app__header-top_content">
                    <div className="text">Want anything to be easy with <b>LaslesVPN</b>.</div>
                    <div className="paragraph">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</div>
                    <button className="special-button">Get Started</button>
                </div>
                <div className="app__header-top_img up-and-down ">
                    <img src={Images.deskTop} alt="" />
                </div>
            </div>
            <div className="app__header-bottom">
                <Informations image={Images.user} number={90} text="Users" />
                <Informations image={Images.location} number={30} text="Locations" />
                <Informations image={Images.server} number={50} text="Servers" />
            </div>
        </div>
    );
};

export default Header;