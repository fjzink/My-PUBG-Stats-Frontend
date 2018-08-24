import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from '../styles/menu.scss';

class LargeMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: '' };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <div className='LargeMenu'>
                <Menu stackable className={styles.menu}>
                    <Menu.Item
                        className={styles.item}
                        name='index'
                        active={activeItem === 'index'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/'
                    >
                        Player Stats
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            className={styles.item}
                            name='signup'
                            active={activeItem === 'signup'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/signup'
                        >
                            Sign Up
                        </Menu.Item>
                        <Menu.Item
                            className={styles.item}
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/login'
                        >
                            Log In
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default LargeMenu;
