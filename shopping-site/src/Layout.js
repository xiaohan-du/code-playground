import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './Layout.scss';

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

            <Footer />
        </Router>
    )
}

export default Layout;