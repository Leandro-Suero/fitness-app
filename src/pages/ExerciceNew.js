import React from "react";
import Card from "../components/Card";
import ExerciceForm from "../components/ExerciceForm";

const ExerciceNew = ({ handleChange, handleSubmit, state }) => (
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

export default ExerciceNew;
