import React, { useState } from "react";
import Card from "../components/Card";
import ExerciceForm from "../components/ExerciceForm";
import Loading from "../components/Loading";
import FatalError from "./FatalError";

const ExerciceNew = props => {
    const [state, setState] = useState({
        title: "",
        description: "",
        img: "",
        leftColor: "",
        rightColor: ""
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        // console.log(e.target.name, e.target.value);
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            let config = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(state)
            };

            let res = await fetch(
                "http://localhost:8000/api/exercises",
                config
            );
            let json = await res.json();

            setLoading(false);
            props.history.push("/exercices");
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    if (loading) return <Loading />;
    if (error) return <FatalError />;

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
