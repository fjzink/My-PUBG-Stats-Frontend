import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayerStats from './PlayerStats';
import SiteHeader from './SiteHeader';
import NoMatch from './NoMatch';
import styles from '../styles/styles.scss';

const App = () => {
    return (
            <div className={'App ' + styles.app}>
                <SiteHeader />
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/' component={PlayerStats} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
};

export default App;
