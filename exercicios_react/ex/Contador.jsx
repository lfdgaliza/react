import React, { Component } from 'react'

export default class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }
    sum(delta) {
        this.setState({ value: this.state.value + delta })
    }
    render() {
        return (
            <div>
                {this.state.value}
                <button onClick={() => this.sum(1)}>+</button>
                <button onClick={() => this.sum(-1)}>-</button>
            </div>
        )
    }
}