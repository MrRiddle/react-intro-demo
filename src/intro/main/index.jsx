import React from 'react';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    handleClick(e) {
        this.setState({
            num: this.state.num + 1
        });
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>Hello {this.props.name}</h1>
                <p>{this.state.num}</p>
            </div>

        );
        // return React.createElement('h1', {style: {color: 'red'}}, 'Hello World!')
    }
}