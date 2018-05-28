import React from 'react';
import './index.less';

import Album from '../album';
import Progress from '../progress';

export default class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            duration: 0,
            currentTime: 0
        }
        this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
        this.toggle = this.toggle.bind(this);
        this.jumpTo = this.jumpTo.bind(this);
        this.setDuration = this.setDuration.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.updatePlayerInfo, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setDuration() {
        this.setState({
            duration: this.audio.duration
        });
    }

    updatePlayerInfo() {
        this.setState({
            currentTime: this.audio.currentTime
        });
    }

    toggle() {
        const { status } = this.state;
        this.setState({
            status: status ^ 1
        }, () => {
            if (status) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
        });
    }

    jumpTo(e) {
        e.preventDefault();
        const value = e.currentTarget.value;
        this.audio.currentTime = value;
    }

    render() {
        return (
            <div className="player">
                <Album cover={this.props.cover} status={this.state.status} handler={this.toggle} />
                <Progress duration = {this.state.duration} currentTime={this.state.currentTime} jumpTo={this.jumpTo}/>
                <audio ref={c => {this.audio = c}} onCanPlay={this.setDuration} loop>
                    <source src={this.props.music}></source>
                </audio>
            </div>
        );
    }
}