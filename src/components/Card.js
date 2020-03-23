import React, { useState } from "react";
import circlesImg from "../images/circles.png";
import "./styles/Card.css";

const Card = props => {
    return (
        <div
            className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${props.colorLeft}, ${props.colorRight})`
            }}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={props.img} className="float-right" />
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
