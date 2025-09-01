import React from "react";

import "./Companies.css";
import { SpecialHeading } from "../../components";
import {Images} from "../../constants";

const Companies = () => {
    return (
        <div className="app__companies section__padding">
            <SpecialHeading titre="Huge Global Network of Fast VPN" text="See LaslesVPN everywhere to make it easier for you when you move locations." />
            <div className="app__companies-huge-map">
                <img src={Images.hugeMap} alt="world Map" />
            </div>
            <div className="app__companies-logos">
                <img src={Images.reddit} alt="reddit Logo" />
                <img src={Images.discord} alt="discord Logo" />
                <img src={Images.spotify} alt="spotify Logo" />
            </div>
        </div>
    );
};

export default Companies;