import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter_actions';
import styles from '../styles/styles.scss';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className={styles.hello}>Hello World!</div>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <p>{this.props.counter}</p>
                <button onClick={this.props.decrementCounter}>Decrement</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { counter: state.counter };
  }

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(App);
