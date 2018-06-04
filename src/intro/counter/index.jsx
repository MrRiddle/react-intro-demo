import { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            times: 0
        }
        this.handleClick = this.handleClick.bind(this);
        // remember to bind this
    }

    handleClick(e) {
        this.setState({
            times: this.state.times + 1
        });
        // do not use this.state.times++ or this.state.times = this.state.times + 1
    }

    render() {
        return (
            <div onClick = {this.handleClick}>
                Hi, {this.props.name}. I've been clicked {this.state.times} times.
            </div>
        )
    }
}