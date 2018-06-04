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
        this.sliding = false;
        this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
        this.toggle = this.toggle.bind(this);
        this.jumpTo = this.jumpTo.bind(this);
        this.slideTo = this.slideTo.bind(this);
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
        if(!this.sliding) {
            this.setState({
                currentTime: this.audio.currentTime
            });
            this.progress.sliding();
        }
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
        this.sliding = false;
        const value = e.currentTarget.value;
        this.setState({
            currentTime: value
        });
        this.audio.currentTime = value;
        this.progress.sliding();
    }

    slideTo(e) {
        e.preventDefault();
        this.sliding = true;
        const value = e.currentTarget.value;
        this.setState({
            currentTime: value
        });
        this.progress.sliding();
    }

    render() {
        return (
            <div className="player">
                <Album cover={this.props.cover} status={this.state.status} handler={this.toggle} />
                <Info title={this.props.title} artist={this.props.artist} />
                <Progress ref={c => {this.progress = c}} duration = {this.state.duration} currentTime={this.state.currentTime} slideTo={this.slideTo} jumpTo={this.jumpTo}/>
                <audio ref={c => {this.audio = c}} onCanPlay={this.setDuration} loop>
                    <source src={this.props.src}></source>
                </audio>
            </div>
        );
    }
}

const Info = (props) => (<p className="info">{props.title}-{props.artist}</p>)