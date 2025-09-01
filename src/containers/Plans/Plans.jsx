import React from "react";

import { SpecialHeading } from "../../components";
import {Cards} from "../../components";
import "./Plans.css";

const Plans = () => {
    return (
        <div className="app__plans section__padding" id="pricing">
            <SpecialHeading titre="Choose Your Plan" text="Let's choose the package that is best for you and explore it happily and cheerfully."/>
            <div className="app__plans-cards">
                <Cards number={1} type="Free Plan"  price='Free' color={"#4F5665"} />
                <Cards number={2} type="Standard Plan"  price='$9' color={"#4F5665"} />
                <Cards number={3} type="Premium Plan"  price='$12' color={"#F53838"} />
            </div>
        </div>

        
    ); 
};

export default Plans;