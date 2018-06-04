import { Component } from 'react';

export default class King extends Component {
    constructor(props) {
        super(props);
        this.state = {
            army: 100,
            distribution: [100, 100, 100]
        }
        this.give = this.give.bind(this);
    }

    give(num, no) {
        if(this.state.army - num < 0) {
            return;
        }
        const newDistribution = this.state.distribution.concat();
        newDistribution[no] = newDistribution[no] + num;

        this.setState({
            army: this.state.army - num,
            distribution: newDistribution
        });
    }

    render() {
        return (
            <div>
                <p>King has {this.state.army} soldiers.</p>
                {
                    this.state.distribution.map((e, i) => (
                        <p>
                            General{i}:<General ask={this.give} army={e} no={i} key={`g-${i}`}></General>
                        </p>
                    ))
                }
            </div>
        )
    }
}

class General extends Component {
    
    render() {
        return (
            <span onClick={ () => {
                this.props.ask(10, this.props.no)
            }}>I have {this.props.army} soldiers.</span>
        )
    }
}