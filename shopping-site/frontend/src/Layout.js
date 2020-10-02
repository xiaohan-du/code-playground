import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import PhD from './pages/PhD';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './Layout.scss';
import Projects from './pages/Projects';

const Layout = () => {
    return (
        <Router>
            
            <Navbar />
            
            <Switch>
                <Route path="/contact-me">
                    <Contact />
                </Route>
                <Route path="/my-projects">
                    <Projects />
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