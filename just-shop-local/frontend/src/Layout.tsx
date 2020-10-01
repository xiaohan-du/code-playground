import React from 'react';
import Home from './pages/Home';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Details from './pages/Details';

const Layout = () => {
    return (
        <Router>            
            <Switch>
                <Route path="/details">
                    <Details />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>
    )
}

export default Layout;