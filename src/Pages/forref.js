import React, { useState } from 'react';
// **** Forwarding Refs ****
// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton my-4 ml-2 bg-blue-200 py-2 px-3">
      {props.children}
    </button>
  ));
  
  // You can now get a ref directly to the DOM button:
  function Forref() {
    const ref = React.createRef();
    return (
  <FancyButton ref={ref} >Click me!</FancyButton>
    )
  };
  export default Forref;