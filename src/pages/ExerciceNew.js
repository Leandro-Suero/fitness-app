import React, { useState } from "react";
import Card from "../components/Card";
import ExerciceForm from "../components/ExerciceForm";

const ExerciceNew = props => {
    const [state, setState] = useState({
        title: "",
        description: "",
        img: "",
        leftColor: "",
        rightColor: ""
    });

    const handleChange = e => {
        console.log(e.target.name, e.target.value);
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <div className="container">
            <h2>Create a new Exercice!</h2>
            <div className="row">
                <div className="col-sm">
                    <Card {...state} />
                </div>
                <div className="col-sm6">
                    <ExerciceForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        state={state}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExerciceNew;
