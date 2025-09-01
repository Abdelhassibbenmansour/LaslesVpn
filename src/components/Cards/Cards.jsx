import React from "react";

import {Images,Data} from "../../constants"
import {Details} from "../index";
import {Price} from "../index";
import "./Cards.css";

const Cards = ({number,type,price,color}) => {
    return (
        <div className="app__card" style={{border: `2px solid ${color}`}}>
            <div className="app__card-top">
                <div className="app__card-top_img">
                    <img src={Images.box} alt="" />
                </div>
                <div className="app__card-top_type">{type}</div>
                <div className="app__card-top-infos">
                    {Data[`Card${number}`].map((card,index) => {
                        return (
                            <Details img={Images.checkedCard} text={card.text} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className="app__card_bottom">
                <Price price={price}/>
            </div>
        </div>
    );
};

export default Cards;