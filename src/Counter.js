import React, { Component } from 'react'

export default class Counter extends Component {
    // 1- state init
    constructor(props){
        console.log('This is the init')
        super(props);
        this.state = {count: 0}
    }

    // 2- state update
    increment = () => {
        this.setState({count: this.state.count+1})
    }
    decrement = () => {
        this.setState({count: this.state.count > 0 ? this.state.count-1 : this.state.count})
    }

    componentDidMount() {
        console.log('The component just mounted')
    }
    componentDidUpdate(){
        console.log('The component updated')
    }
    componentWillUnmount() {
        console.log('The component will unmount')
    }




    render() {
        console.log('Component rendering')
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h5>{this.state.count}</h5>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
