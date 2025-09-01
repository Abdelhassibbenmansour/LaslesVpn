import React from "react";

import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div className="section__padding">
            <div className="app__subscribe">
                <div className="app__subscribe-infos">
                    <div className="title">Subscribe Now for Get Special Features!</div>
                    <div className="text">Let's subscribe with us and find the fun.</div>
                </div>
                <div className="app__subscribe-button">
                    <button className="app__subscribe-button special-button">Subscribe Now</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;