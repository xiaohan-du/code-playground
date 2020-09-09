import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const Layout = () => {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Layout;