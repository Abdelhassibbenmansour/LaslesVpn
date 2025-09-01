import React from "react";

import "./Features.css";
import {Images} from "../../constants";
import { Details } from "../../components";

const Features = () => {
    return (
        <div className="app__features section__padding" id="features">
            <div className="app__features-img">
                <img src={Images.celebrating} alt="" className="up-and-down" />
            </div>
            <div className="app__features-infos">
                <div className="app__features-infos_text">We Provide Many Features You Can Use</div>
                <div className="app__features-infos_paraghraph">You can explore the features that we provide with fun and have their own functions each feature.</div>
                <Details img={Images.checked} text="Powerfull online protection." />
                <Details img={Images.checked} text="Internet without borders." />
                <Details img={Images.checked} text="Supercharged VPN" />
                <Details img={Images.checked} text="No specific time limits." />
            </div>
        </div>
    );
};

export default Features;