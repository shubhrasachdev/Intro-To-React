import React from "react";
import './Counter.css';

export default class Counter extends React.Component {
    // Recap what state is..
    // Managing states
    
    // init with constructor
   
    constructor(props) {
        console.log("Constructor!!!")
        super(props);
        this.state = {
            counter: 0,
            color: 'red'
        }

        // Writing event handlers
        this.increment = () => this.setState({
            counter: this.state.counter + 1
        });

        this.decrement = () => this.setState({
            counter: this.state.counter - 1
        });

        this.changeColor = () => this.setState({
            color: 'blue',
            counter: 100
        })

    }
    

    // Lifecycle Methods

    // 1. componentDidMount
    componentDidMount() {
        console.log("Component Did Mount");
        console.log("-----------------------");
    }

    // 2. componentDidUpdate
    componentDidUpdate() {
        console.log("Component Did Update");
        console.log("-----------------------");
    }

    // 3. componentWillUnmount
    componentWillUnmount() {
        console.log("Component Will Unmount");
        console.log("-----------------------");
    }
    
    render() {
        return(
            <div className="counter-container">
                <div className="counter-val">
                    {this.state.counter}<br></br>
                    {this.state.color}
                </div>
                <div className="btn-section">
                    <button onClick={this.increment} className="btn increment-btn">Increment</button>
                    <button onClick={this.decrement} className="btn decrement-btn">Decrement</button> 
                    <button onClick={this.changeColor} className="btn change-color-btn">Change Color</button> 
                </div>
            </div>
            
        );
    }
}
