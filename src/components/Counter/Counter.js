import React from "react";
import './Counter.css';
class Counter extends React.Component {
    // Recap what state is..
    // Managing states
    // Lifecycle Methods

    // init with constructor

    // Lifecycle Methods

    // 1. componentDidMount

    // 2. componentDidUpdate

    // 3. componentDidUnmount

    
   

    render() {
        return(
            <div className="counter-container">
                <div className="counter-val">
                    0
                </div>
                <div className="btn-section">
                    <button className="btn increment-btn">Increment</button>
                    <button className="btn decrement-btn">Decrement</button> 
                </div>
            </div>
            
        );
    }
}

export default Counter;