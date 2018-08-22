import React from 'react';
import { Header } from 'semantic-ui-react';
import styles from '../styles/site_header.scss';

export default () => {
    return <Header className={styles.header} as='h1' textAlign='center'>My PUBG Stats</Header>;
};
