import React from 'react';

export default class LifeCircle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            times: 0
        }
        this.handleClick = this.handleClick.bind(this);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick(e) {
        this.setState((prevState) => ({
            times: prevState.times + 1
        }));
    }

    render() {
        console.log('render');
        return <div onClick={this.handleClick}>{this.props.name}:{this.state.times}</div>
    }
}

LifeCircle.defaultProps = {
    name: 'Click'
}