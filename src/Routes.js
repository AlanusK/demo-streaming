import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Series from './pages/series';
import Movies from './pages/movies';

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/' component={Home} />
        </Switch>
    </Router>
);

export default Routes;