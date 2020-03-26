import React from "react";
import Welcome from "../components/Welcome";
import AddNew from "../components/AddNew";
import ExerciceList from "../components/ExerciceList";

const Exercices = ({ exercices }) => (
    <React.Fragment>
        <Welcome username="Leandro" />
        <ExerciceList data={exercices} />
        <AddNew />
    </React.Fragment>
);
export default Exercices;
