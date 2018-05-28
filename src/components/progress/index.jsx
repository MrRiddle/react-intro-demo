import React from 'react';
import './index.less';

export default class Progress extends React.Component {

    constructor(props) {
        super(props);
        this.fommater = this.fommater.bind(this);
        this.sliding = this.sliding.bind(this);
    }

    fommater(time) {
        const minute = (time / 60) | 0;
        const second = (time % 60) | 0;
        return `${minute}:${second<10?'0':''}${second}`;
    }

    sliding() {
        const value = this.input.value;
        const max = this.input.max || 1;
        const percent = value / max * 100;
        this.input.style.background = `linear-gradient(to right, #FFD000, #FFD000 ${percent}%, rgba(0,0,0,.2) ${percent}%,  rgba(0,0,0,.2))`;
    }

    render() {
        const { duration = 0, currentTime = 0 } = this.props;
        return (
            <div className="progress" onClick={this.props.handler}>
                <span className="time">
                    {this.fommater(currentTime)}
                </span>
                <input type="range" ref={c => {this.input = c}} min="0" max={duration} value={currentTime | 0} onMouseUp={this.props.jumpTo} onChange={this.props.slideTo} />
                <span className="time">
                    {this.fommater(duration)}
                </span>
            </div>
        );
    }
}