import React, { Component, PropTypes } from 'react';

export default class Counter extends React.Component {

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        <h1>
          Implementing React-Hot-Reloading.
        </h1>
        
        <br/>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    );
  }
}
