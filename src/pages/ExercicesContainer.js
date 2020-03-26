import React from "react";
import Loading from "../components/Loading";
import FatalError from "./FatalError";
import Exercices from "./Exercices";
import url from "../config";
import useFetch from "../hooks/useFetch";

const ExercicesContainer = props => {
    const { data, loading, error } = useFetch(`${url}/exercises`);

    if (loading) return <Loading />;
    if (error) return <FatalError />;

    return <Exercices exercices={data} />;
};

export default ExercicesContainer;
