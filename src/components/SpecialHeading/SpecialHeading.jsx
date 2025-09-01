import React from "react";

import "./SpecialHeading.css";

const SpecialHeading = ({titre,text}) => {
    return(
        <div className="app__special-heading">
            <div className="titre">{titre}</div>
            <div className="text">{text}</div>
        </div>
    );
};

export default SpecialHeading;