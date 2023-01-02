import React from 'react'
import ContentEditable from 'react-contenteditable'

class Content extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: "<b>Edit this <i>Content</i></b>"};
  };

  handleChange = evt => {
    this.setState({html: evt.target.value});
  };

  render = () => {
    return <ContentEditable
              className="w-[250px] outline-none border-blue-200 border-2 py-2 px-3"
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            />

  };
};

export default Content;