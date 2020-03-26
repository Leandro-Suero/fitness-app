import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import AddNew from "../components/AddNew";
import Loading from "../components/Loading";
import FatalError from "./FatalError";

import ExerciceList from "../components/ExerciceList";

const Exercices = props => {
    const [exercices, setExercices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExercices = async () => {
            try {
                let res = await fetch("http://localhost:8000/api/exercises");
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

    return (
        <div>
            <Welcome username="Leandro" />
            <ExerciceList data={exercices} loading={loading} />
            <AddNew />
        </div>
    );
};

export default Exercices;
