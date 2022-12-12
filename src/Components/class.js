import React from 'react';

class Class extends React.Component {
  constructor() {
    super();
    this.state = {
      var: "two",
      count: 0
    };
  }
  render() {
  return <div> <h2>Hi, I am a {this.state.var} Class Component {this.state.count}!</h2>
  <button className="bg-green-100 m-4 py-1 px-3" onClick={() => this.setState({ count: this.state.count + 1 })}>
  Click me
</button>
</div>
  }

  
}

export default Class;
