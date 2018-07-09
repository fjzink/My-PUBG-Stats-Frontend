import React, { Component } from 'react';
import PlayerStats from './PlayerStats';
import styles from '../styles/styles.scss';

const App = () => {
    return (
            <div className={'App ' + styles.app}>
                <PlayerStats />
            </div>
        );
};

export default App;
