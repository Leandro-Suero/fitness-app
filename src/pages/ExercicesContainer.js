import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import FatalError from "./FatalError";
import Exercices from "./Exercices";
import url from "../config";

const ExercicesContainer = props => {
    const [exercices, setExercices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExercices = async () => {
            try {
                let res = await fetch(`${url}/exercises`);
                let data = await res.json();

                setExercices(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchExercices();
    }, []);

    if (loading) return <Loading />;
    if (error) return <FatalError />;

    return <Exercices exercices={exercices} />;
};

export default ExercicesContainer;
