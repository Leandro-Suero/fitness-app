import React from "react";
import Card from "../components/Card";

const ExerciceList = props => {
    return props.data.map(exercice => (
        <Card
            key={exercice.id}
            title={exercice.title}
            description={exercice.description}
            img={exercice.img}
            leftColor={exercice.leftColor}
            rightColor={exercice.rightColor}
        />
    ));
};

export default ExerciceList;
