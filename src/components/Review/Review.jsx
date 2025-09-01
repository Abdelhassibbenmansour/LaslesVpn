import React from 'react';

import "./Review.css";

const Review = ({image,name,location,note,star,comment}) => {
    return (
        <div className="app__review">
            <div className="app__review-top">
                <div className="app__review-top_left">
                    <div className="app__review-top_left-img">
                        <img src={image} alt="person photo" />
                    </div>
                    <div className="app__review-top_left-details">
                        <div className="app__review-top_left-details_name">{name}</div>
                        <div className="app__review-top_left-details_location">{location}</div>
                    </div>
                </div>
                <div className="app__review-top_right">
                    <div className="app__review-top_right-note">{note}</div>
                    <div className="app__review-top_right-star"><img src={star} alt="star photo" /></div>
                </div>
            </div>
            <div className="app__review-bottom">
                {comment}
            </div>
        </div>
    );
};

export default Review;