
import './App.css';
import Counter from './Counter';
import React, { Component } from 'react'

export default class App extends Component {
  // 1- state init
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  // 2- state update
  toggel = () => {
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      <div>
          <h1>WS React state</h1>
          <button onClick={this.toggel}>Change state</button>
          {this.state.show ? <Counter /> : null}
      </div>
    )
  }
}

