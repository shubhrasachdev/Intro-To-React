import React from "react";
import Counter from "./Counter";
import './Counter.css'

class CounterParent extends React.Component {

    render() {
        return(
            <div className="counter-parent">
                <Counter />
            </div>
        ) 
    }
}

export default CounterParent;