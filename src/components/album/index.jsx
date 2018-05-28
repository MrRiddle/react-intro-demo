import React from 'react';
import './index.less';

export default class Album extends React.Component {
    render() {
        const { status = 0 } = this.props;
        return (
            <div className="album" onClick={this.props.handler}>
                <img className={`cover${status?' active':''}`} src={this.props.cover} />
            </div>
        );
    }
}