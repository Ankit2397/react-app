import React, { Component } from 'react';
export default class JSXComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beverage: 21
        }
    }
    render() {
        return (
            <div className="row">
                {
                    (this.state.beverage === 21)
                        ? <p> Beer </p>
                        : <p> Coke </p>
                }
            </div>
        );
    }
}

