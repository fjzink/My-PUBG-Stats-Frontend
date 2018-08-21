import React, { Component } from 'react';
import PlayerStats from './PlayerStats';
import SiteHeader from './SiteHeader';
import styles from '../styles/styles.scss';

const App = () => {
    return (
            <div className={'App ' + styles.app}>
                <SiteHeader />
                <PlayerStats />
            </div>
        );
};

export default App;
