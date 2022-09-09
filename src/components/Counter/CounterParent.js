import React from "react";
import Counter from "./Counter";
import './Counter.css'

class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: true
        }

        this.mountCounter = () => this.setState({mount: true});
        
        this.unmountCounter = () => this.setState({mount: false});
    }

    render() {
        return(
            <div className="counter-parent">
                <div className="btn-section">
                    <button onClick={this.mountCounter} className="btn increment-btn">Mount</button>
                    <button onClick={this.unmountCounter} className="btn decrement-btn">Unmount</button> 
                </div>
                {this.state.mount && <Counter />}
            </div>
        ) 
    }
}

export default CounterParent;