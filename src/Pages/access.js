import React, { useState } from 'react';

class Acess extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.timeOutId = null;
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onBlurHandler = this.onBlurHandler.bind(this);
      this.onFocusHandler = this.onFocusHandler.bind(this);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    onBlurHandler() {
      this.timeOutId = setTimeout(() => {
        this.setState({
          isOpen: false
        });
      });
    }
  
    // If a child receives focus, do not close the popover.
    onFocusHandler() {
      clearTimeout(this.timeOutId);
    }
  
    render() {
      // React assists us by bubbling the blur and
      // focus events to the parent.
      return (
        <div onBlur={this.onBlurHandler}
             onFocus={this.onFocusHandler}>
          <button onClick={this.onClickHandler}
                  aria-haspopup="true"
                  aria-expanded={this.state.isOpen}
                  className="bg-blue-200 p-2 hover:bg-red-200"
                  >
            Select an option
          </button>
          {this.state.isOpen && (
            <ul className="bg-red-500 w-[120px] mt-2 relative top-[-10px] left-[130px]">
              <li className="hover:bg-blue-700 p-2 text-white">Option 1</li>
              <li className="hover:bg-blue-700 p-2 text-white">Option 2</li>
              <li className="hover:bg-blue-700 p-2 text-white">Option 3</li>
            </ul>
          )}
        </div>
      );
    }
  }
  export default Acess;