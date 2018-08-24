import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayerStats from './PlayerStats';
import SiteHeader from './SiteHeader';
import NavMenu from './NavMenu';
import NoMatch from './NoMatch';
import Signup from './Signup';
import Login from './Login';
import styles from '../styles/styles.scss';

const App = () => {
    return (
            <div className={'App ' + styles.app}>
                <SiteHeader />
                <BrowserRouter>
                    <div>
                        <NavMenu />
                        <Switch>
                            <Route exact path='/' component={PlayerStats} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/login' component={Login} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
};

export default App;
