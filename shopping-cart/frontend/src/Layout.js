import React from 'react';
import Home from './pages/Home';
import Summary from './pages/Summary';
import SNavbar from './components/SNavbar';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
    return (
        <div className='center-content'>
            <h1 className='is-size-1'>Shop</h1>
            
            <Router>

            <SNavbar />
            
                <Switch>
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