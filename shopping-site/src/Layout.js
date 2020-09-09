import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Layout = () => {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route path="/contact-us">
                    <Contact />
                </Route>
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