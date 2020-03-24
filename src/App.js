import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Exercices from "./pages/Exercices";
import ExerciceNew from "./pages/ExerciceNew";
import NotFound from "./pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exercices" component={Exercices} />
            <Route exact path="/exercices/new" component={ExerciceNew} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;
