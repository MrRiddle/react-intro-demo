import { Component } from 'react';

export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { music, artist, cover } = this.props;
        const { time } = this.state;
        return (
            <div className="player">
            </div>
        );
    }
}

