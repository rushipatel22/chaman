import React from 'react';

export default class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.countStart };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement = () => {
        if (this.state.count > this.props.countStart) {
            this.setState({ count: this.state.count - 1 });
        }
    }
    reset = () => {
        this.setState({ count: this.props.countStart });
    }
    render() {
        return (
            <>
                <div id="counter">{this.state.count}</div>
                <div className="button_group">
                    <button id="add" onClick={this.increment}>+</button>
                    <button id="reset" onClick={this.reset}>Reset</button>
                    <button id="subtract" onClick={this.decrement}>-</button>
                </div>
            </>
        )
    }
}