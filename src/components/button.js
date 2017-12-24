import React, {Component} from 'react';

class Add extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.add("add")
                }}>ADD
                </button>
                <button onClick={() => {
                    this.props.add("subs")
                }}>SUB
                </button>
                <br/>
                <button onClick={() => {
                    this.props.add("inc")
                }}>INCREASE
                </button>
                <button onClick={() => {
                    this.props.add("dec")
                }}>DECREASE
                </button>
            </div>
        );
    }

}

export default Add;