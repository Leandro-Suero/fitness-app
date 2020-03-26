import React from "react";
import Card from "../components/Card";

const ExerciceList = ({ data }) => {
    return data.map(exercice => <Card key={exercice.id} {...exercice} />);
};

export default ExerciceList;
