import React, { Component } from 'react'

class ChangingText extends Component {
    constructor(props) {
        super(props)

        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this); // pqp
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <div>{this.state.value}</div>
                <input type='text' onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default ChangingText;