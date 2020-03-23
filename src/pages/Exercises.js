import React from "react";
import Welcome from "../components/Welcome";
import Card from "../components/Card";
import exerciseImg from "../images/exercise.png";

const Exercices = props => (
    <div>
        <Welcome username="Leandro" />
        <Card
            title="Technique Guidelines"
            description="Learn amazing street workout and calisthenics skills."
            img={exerciseImg}
            leftColor="#a74cf2"
            rightColor="#617bfb"
        />
    </div>
);

export default Exercices;
