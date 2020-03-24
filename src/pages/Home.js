import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <React.Fragment>
        <h1 className="text-center mt-2">Welcome!</h1>

        <Link to="/exercices/new" className="btn btn-info d-block my-5">
            Add a new exercise here!
        </Link>
        <Link to="/exercices" className="btn btn-primary d-block">
            Or watch all the current exercices.
        </Link>
    </React.Fragment>
);

export default Home;
