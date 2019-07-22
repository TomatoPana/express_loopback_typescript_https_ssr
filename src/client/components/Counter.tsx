import React, { Component } from 'react';

export interface CounterProps {
    children?: JSX.Element;
}

export interface CounterState {
    counter: number;
}

class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps){
        super(props);
        this.state = { counter: 0 };
    }

    incrementCounter(){
        this.setState({ counter: this.state.counter + 1 });
    }

    render(): JSX.Element {
        return(
            <div>
                <h1>Counter at: { this.state.counter }</h1>
                <button onClick = { () => this.incrementCounter() }>Increment</button>
            </div>
        );
    }
}

export default Counter;