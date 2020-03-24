import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercices from "./pages/Exercices";
import ExerciceNew from "./pages/ExerciceNew";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/exercices" component={Exercices} />
            <Route exact path="/exercices/new" component={ExerciceNew} />
        </BrowserRouter>
    );
}

export default App;
