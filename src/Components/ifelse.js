import React, { Component } from 'react';
export default class JSXComponent extends Component {
    colors = ['Red', 'Pink', 'Green', 'Blue'];
    render() {
        if (!this.colors.length) {
            return <span>Sorry, color list is empty.</span>;
        } else {
            return (
                <div>
                    {this.colors.map(item => item + ' ')}
                </div>
            );
        }
    }
}