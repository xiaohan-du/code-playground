import React from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Summary from './pages/Summary';
import SNavbar from './components/SNavbar';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
    return (
        <div className='center-content'>
            <h1>Shop</h1>
            
            <Router>

            <SNavbar />
            
                <Switch>

                    <Route path="/details">
                        <Details />
                    </Route>
                    <Route path="/summary">
                        <Summary />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default Layout;