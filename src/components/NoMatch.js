import React from 'react';
import { Message } from 'semantic-ui-react';

export default () => {
    return (
        <Message error>
            <Message.Header>Doesn't look like anything to me.</Message.Header>
            <p>Sorry, this page doesn't exist. ¯\_(ツ)_/¯</p>
        </Message>
    );
};
