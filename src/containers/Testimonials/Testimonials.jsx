import React , {useRef} from "react";

import "./Testimonials.css";
import { SpecialHeading } from "../../components";
import {Review} from "../../components"
import {Images} from "../../constants";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";


const Testimonials = () => {
    const reviews = useRef();

    const scrolling = (direction) => {
        const {current} = reviews;
        if(direction === "left") {
            current.scrollBy({ left: -350, behavior: "smooth" });
        } else {
            current.scrollBy({ left: +350, behavior: "smooth" });
        }
    };

    return (
        <div className="app__testimonials section__padding" id="testimonials">
            <SpecialHeading titre="Trusted by Thousands of Happy Customer" text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature." />
            <div className="app__testimonials-reviews" ref={reviews}>
                <Review image={Images.person1} name="Viezh Robert" location="Warsaw, Poland" note={4.5} star={Images.star}
                comment="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
                />
                <Review image={Images.person2} name="Yessica Christy" location="Shanxi, China" note={4.2} star={Images.star}
                comment="“I like it because I like to travel far and still can connect with high speed.”."
                />
                <Review image={Images.person3} name="Kim Young Jou" location="Seoul, South Korea" note={3.9} star={Images.star}
                comment="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
                />
                <Review image={Images.person2} name="Yessica Christy" location="Shanxi, China" note={4.2} star={Images.star}
                comment="“I like it because I like to travel far and still can connect with high speed.”."
                />
                <Review image={Images.person1} name="Viezh Robert" location="Warsaw, Poland" note={4.5} star={Images.star}
                comment="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
                />
            </div>
            <div className="icons">
                <FaCircleArrowLeft className="left button" onClick={() => scrolling("left")}/>
                <FaCircleArrowRight className="right button" onClick={() => scrolling("right")}/>
            </div>
        </div>
    );
};

export default Testimonials;