import React from 'react';
import './index.less';

export default class Progress extends React.Component {

    fommater(time) {
        const minute = (time / 60) | 0;
        const second = (time % 60) | 0;
        return `${minute}:${second}`;
    }

    render() {
        const { duration = 0, currentTime = 0 } = this.props;
        return (
            <div className="progress" onClick={this.props.handler}>
                <input type="range" min="0" max={duration} value={currentTime | 0} onChange={this.props.jumpTo} />
                {this.fommater(currentTime)}
                /
                {this.fommater(duration)}
            </div>
        );
    }
}