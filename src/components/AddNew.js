import React from "react";
import imageAdd from "../images/add.png";
import { Link } from "react-router-dom";

const AddNew = props => (
    // <img src={imageAdd} alt="" className="Fitness-Add" />
    <Link to="/exercices/new">
        <img src={imageAdd} alt="" className="mx-auto d-block" />
    </Link>
);

export default AddNew;
