import React from 'react';
import './index.less';

export default class Album extends React.Component {
    render() {
        const { status = 0 } = this.props;
        return (
            <div className={`album${status?' active':''}`} onClick={this.props.handler}>
                {
                    Array.from({length: 20}).map((e, i) => (
                        <div className="ring" key={`ring-${i}`} style={{
                            width: `${100 - i*50/20}%`,
                            height: `${100 - i*50/20}%`
                        }}></div>
                    ))
                }
                <img className="cover" src={this.props.cover} />
                <div className={`icon${status?' active':''}`}></div>
            </div>
        );
    }
}