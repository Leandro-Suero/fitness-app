import React from "react";
import circlesImg from "../images/circles.png";
import emptyImg from "../images/empty.png";
import "./styles/Card.css";

const Card = props => {
    return (
        <div
            className="card mx-auto Fitness-Card mb-3"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${props.leftColor ||
                    "#56CCF2"}, ${props.rightColor || "#2F80ED"})`
            }}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img
                            src={props.img || emptyImg}
                            className="float-right"
                            alt=""
                        />
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
