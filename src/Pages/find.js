import React from 'react';
import ReactDOM from 'react-dom';

// Defining our App Component
const FindDom = () => {

// Function to get element from findDOMNode()
function find() {
	var node = document.getElementById("node");
	var a = ReactDOM.findDOMNode(node);
	console.log(a);
	a.style.color = 'green';
	a.style.fontSize = "x-large";
}

// Returning our JSX code
return <>
	<div>
	<h1>findDOMNode</h1>
	<div id='node'>Here is DOM Node</div>
	<button onClick={find} className="bg-blue-200 p-2">Click to find</button>
	</div>
</>;
}

export default FindDom;  