import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Message } from 'semantic-ui-react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleSubmit = () => {
        const { username, email, password } = this.state;
        const user = { user: { username, email, password } };
        const createUserURL = 'http://localhost:3000/users';
        axios.post(createUserURL, user)
            .then((res) => {
                console.log(res);
            });
    }

    render() {
        const {
            username,
            email,
            password,
            passwordConfirmation,
        } = this.state;
        return (
            <div className='Signup'>
                <Form
                    loading={false}
                    onSubmit={this.handleSubmit}
                    error={false}
                    success={false}
                >
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Username'
                            name='username'
                            value={username}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Password'
                            name='password'
                            value={password}
                            type='password'
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label='Confirm Password'
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button content='Sign up' color='yellow' />
                </Form>
            </div>
        );
    }
}

export default Signup;
