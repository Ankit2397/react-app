import React from 'react';  
  
class ErrorBoundary extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { error: false, errorInfo: null };  
  }  
    
  componentDidCatch(error, errorInfo) {  
    // Catch errors in any components below and re-render with error message  
    this.setState({  
      error: error,  
      errorInfo: errorInfo  
    })  
  }  
    
  render() {  
    if (this.state.errorInfo) {  
      return (  
        <div>  
          <h2>Something went wrong.</h2>  
          <details style={{ whiteSpace: 'pre-wrap' }}>  
            {this.state.error && this.state.error.toString()}  
            <br />  
            {this.state.errorInfo.componentStack}  
          </details>  
        </div>  
      );  
    }  
    return this.props.children;  
  }    
}  
  
class BuggyCounter extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { counter: 0 };  
    this.handleClick = this.handleClick.bind(this);  
  }  
    
  handleClick() {  
    this.setState(({counter}) => ({  
      counter: counter + 1  
    }));  
  }  
    
  render() {  
    if (this.state.counter === 3) {  
      throw new Error('I crashed!');  
    }  
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
  }  
}  
  
function Error() {  
  return (  
    <div>  
      <p><b>Error Boundaries</b></p>  
      <hr />  
      <ErrorBoundary>  
        <p>These two counters are inside the same error boundary.</p>  
          <BuggyCounter />  
          <BuggyCounter />  
      </ErrorBoundary>  
      <hr />  
      <p>These two counters are inside of their individual error boundary.</p>  
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
    </div>  
  );  
}  
export default Error;

// How to implement error boundaries
// Step-1 Create a class which extends React component and passes the props inside it.

// Step-2 Now, add componentDidCatch() method which allows you to catch error in the components below them in the tree.

// Step-3 Next add render() method, which is responsible for how the component 
// should be rendered. For example, it will display the error message like "Something is wrong."