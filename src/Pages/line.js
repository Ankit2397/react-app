import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
 
export default class App extends Component {
    render() {
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
        return (
            <div>
                <div className="App mt-5">
                    <h1>LineChart</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                    />
                  </div>				
            </div>
        );
    }
}