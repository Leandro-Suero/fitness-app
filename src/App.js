import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ExercicesContainer from "./pages/ExercicesContainer";
import ExerciceNewContainer from "./pages/ExerciceNewContainer";
import NotFound from "./pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exercices" component={ExercicesContainer} />
            <Route
                exact
                path="/exercices/new"
                component={ExerciceNewContainer}
            />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;
