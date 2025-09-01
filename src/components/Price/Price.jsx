import React from "react";

import "./Price.css";

const Price = ({price}) => {
    return (
        <div className="app__price">
            <div className="price"><b>{price}</b>/ mo</div>
            <button className="select-button">Select</button>
        </div>
    );
};

export default Price;