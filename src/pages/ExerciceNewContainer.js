import React, { useState } from "react";
import Loading from "../components/Loading";
import FatalError from "./FatalError";
import ExerciceNew from "./ExerciceNew";
import url from "../config";

const ExerciceNewContainer = props => {
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

            let res = await fetch(`${url}/exercises`, config);
            let json = await res.json();
            console.log(json);
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
        <ExerciceNew
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            state={state}
        />
    );
};

export default ExerciceNewContainer;
