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
  return <div> 
     <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  
     <div>
      <h2>Hi, I am a {this.state.var} Class Component {this.state.count}!</h2>
  <button className="bg-green-100 m-4 py-1 px-3" onClick={() => this.setState({ count: this.state.count + 1 })}>
  Click me
</button>
</div>

   <div className="border-t-2 border-black my-4">
             <h2 className="text-2xl text-center">Controlled Component</h2>
     <Form/>
         </div>

<div><Test/></div>
</div>
</div>
  }

  
}

export default Class;





class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:</label>
          <br></br>
          <textarea className="border-2 my-4 text-gray-400 border-gray-400 focus:outline-[#FE4A2A] rounded-[5px]" value={this.state.value} onChange={this.handleChange} />
        
        <br></br>
        <input className="bg-blue-200 px-2 py-1" type="submit" value="Submit" />
      </form>
    );
  }
}


class Test extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "World!" };
  }
	// componentWillMount()
	// {
	// 	console.log("componentWillMount()");
	// }

	// componentDidMount()
	// {
	// 	console.log("componentDidMount()");
	// }
	changeState()
	{
		this.setState({ hello : "Good!" });
	}

	render()
	{
		return (
			<div>
			<h1> Hello{ this.state.hello }</h1>
			<h2>
			<button onClick={this.changeState.bind(this)}>Press Here!</button>
			</h2>
			</div>);
  }
  
  shouldComponentUpdate(nextProps, nextState)
	{
		console.log("shouldComponentUpdate()");
		return true;
	}

  componentWillUpdate()
	{
		console.log("componentWillUpdate()");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate()");
	}
}

