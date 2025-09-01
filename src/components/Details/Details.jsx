import React from "react";

import {Images} from "../../constants";
import "./Details.css";

const Details = ({img,text}) => {
    return (
        <div className="feaures__details">
            <img src={img} alt="" />
            <div>{text}</div>
        </div>
    );
};

export default Details;