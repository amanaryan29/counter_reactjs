import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Add from './components/button';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 4};
        this.addition = this.addition.bind(this);
    }

    addition(term) {
        let n = this.state.number;
        if (term === "add" && n < 100) {
            this.setState({number: n + 1})
        }

        if (term === "subs" && n > 0) {
            this.setState({number: n - 1})
        }
        if (term === "inc") {
            setInterval(() => {
                if (this.state.number < 100)
                    this.setState({number: this.state.number + 1})
            }, 1000)
        }
        if (term === "dec") {
            setInterval(() => {
                if (this.state.number > 0)
                    this.setState({number: this.state.number - 1})
            }, 1000)
        }
    }


    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <Add add={this.addition}/>
            </div>
        );
    };


}

ReactDOM.render(<Counter/>, document.querySelector('.container'));