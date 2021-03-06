import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './Layout.scss';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import PhD from './pages/PhD';
import Medium from './pages/Medium';
import Learning from './pages/learning/Learning';
import ArrayMethods from './pages/arrayMethods/ArrayMethods';

const Layout = () => {
    return (
        <Router>
            
            <Navbar />
            
            <Switch>
                <Route path="/contact-me">
                    <Contact />
                </Route>
                <Route path="/my-medium">
                    <Medium />
                </Route>
                <Route path="/my-projects/learn-react">
                    <Learning />
                </Route>
                <Route path="/my-projects/learn-array-methods">
                    <ArrayMethods />
                </Route>
                <Route path="/my-phd">
                    <PhD />
                </Route>
                <Route path="/my-career">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

            <Footer />
        </Router>
    )
}

export default Layout;