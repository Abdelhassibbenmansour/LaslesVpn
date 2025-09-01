import React from "react";

import "./Informations.css";

const Informations = ({image,number,text}) => {
    return (
        <div className="app__info">
            <div className="app__info_img">
                <img src={image} alt="" />
            </div>
            <div className="app__info-details">
                <div className="app__info-details-number">{number}+</div>
                <div className="app__info-details-name">{text}</div>
            </div>
        </div>
    );
};

export default Informations;